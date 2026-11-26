/**
 * The page's water: caustic light from the pool texture, drifting slowly, with
 * a wake where the pointer moves – like a finger drawn through the surface.
 *
 * Two parts, both kept cheap:
 * - Ripples: a small height field on the CPU (one cell ≈ 8 CSS px), the
 *   classic two-buffer wave step. The pointer pushes the surface down along
 *   its path. Uploaded each frame as an 8-bit texture.
 * - Light: one WebGL2 draw. Two copies of the caustic texture drift past each
 *   other; the ripple slope bends where they're sampled (refraction) and adds
 *   a faint glint along the wake. Only the bright lines are drawn, as tint at
 *   a low alpha, so the page's own background shows through everywhere else.
 *
 * Returns null when WebGL2 isn't there; the page simply has no water then.
 */

const VERT = `#version 300 es
in vec2 aPos;
out vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`

const FRAG = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;

uniform sampler2D uCaustic;
uniform sampler2D uRipple;
uniform vec2 uView;     // viewport, CSS px
uniform vec2 uTexel;    // one ripple cell, in ripple UV
uniform float uTime;    // seconds
uniform float uScroll;  // page scroll, CSS px
uniform vec3 uTint;
uniform float uAlpha;

// The texture is cyan with white light lines: red is low on the water and
// near 1 on a line, so it isolates the lines.
float lines(vec2 p) {
  return smoothstep(0.45, 0.95, texture(uCaustic, p).r);
}

void main() {
  vec2 ru = vec2(vUv.x, 1.0 - vUv.y);
  float hL = texture(uRipple, ru - vec2(uTexel.x, 0.0)).r;
  float hR = texture(uRipple, ru + vec2(uTexel.x, 0.0)).r;
  float hU = texture(uRipple, ru - vec2(0.0, uTexel.y)).r;
  float hD = texture(uRipple, ru + vec2(0.0, uTexel.y)).r;
  vec2 slope = vec2(hR - hL, hD - hU);

  // One texture tile ≈ 760 CSS px; the pattern scrolls a touch slower than
  // the page, like a pool floor seen through the glass.
  vec2 px = ru * uView + vec2(0.0, uScroll * 0.15);
  vec2 p = px / 760.0;
  vec2 bend = slope * 0.3;

  float a = lines(p + vec2(0.011, 0.007) * uTime + bend);
  float b = lines(p * 1.37 + vec2(0.31, 0.62) - vec2(0.006, 0.012) * uTime + bend * 1.3);
  float v = a * 0.62 + b * 0.38 + length(slope) * 2.5;

  float alpha = clamp(v, 0.0, 1.0) * uAlpha;
  outColor = vec4(uTint * alpha, alpha);
}`

/** Tint and strength per theme: lane-300 on the night pool, lane-600 by day. */
const LOOK = {
  dark: { tint: [0.4, 0.824, 0.957], alpha: 0.065 },
  light: { tint: [0.031, 0.51, 0.714], alpha: 0.15 },
}

const CELL_PX = 8 // ripple grid resolution, CSS px per cell
const DAMPING = 0.975 // per step; lower settles the wake sooner
const FPS = 40

function compile(gl, type, src) {
  const sh = gl.createShader(type)
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (gl.getShaderParameter(sh, gl.COMPILE_STATUS)) return sh
  console.warn('[water]', gl.getShaderInfoLog(sh))
  return null
}

function link(gl) {
  const vs = compile(gl, gl.VERTEX_SHADER, VERT)
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG)
  if (!vs || !fs) return null
  const prog = gl.createProgram()
  gl.attachShader(prog, vs)
  gl.attachShader(prog, fs)
  gl.bindAttribLocation(prog, 0, 'aPos')
  gl.linkProgram(prog)
  if (gl.getProgramParameter(prog, gl.LINK_STATUS)) return prog
  console.warn('[water]', gl.getProgramInfoLog(prog))
  return null
}

/**
 * @param {HTMLCanvasElement} canvas  fixed, full-viewport canvas
 * @param {HTMLImageElement} image    the caustic texture, decoded
 * @param {{ dark: boolean, still: boolean }} opts  still = reduced motion:
 *   one frame, redrawn on resize/theme change, no pointer wake
 */
export function createWaterSurface(canvas, image, { dark, still }) {
  const gl = canvas.getContext('webgl2', {
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    depth: false,
    powerPreference: 'low-power',
  })
  if (!gl) return null
  const prog = link(gl)
  if (!prog) return null

  gl.useProgram(prog)
  const u = Object.fromEntries(
    ['uCaustic', 'uRipple', 'uView', 'uTexel', 'uTime', 'uScroll', 'uTint', 'uAlpha'].map((n) => [
      n,
      gl.getUniformLocation(prog, n),
    ]),
  )

  // One triangle that covers the screen.
  const vao = gl.createVertexArray()
  gl.bindVertexArray(vao)
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  gl.enableVertexAttribArray(0)
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)

  // Caustic texture. WebGL2 repeats any size; mirroring hides the seams of a
  // texture that wasn't made to tile.
  const causticTex = gl.createTexture()
  gl.activeTexture(gl.TEXTURE0)
  gl.bindTexture(gl.TEXTURE_2D, causticTex)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
  gl.generateMipmap(gl.TEXTURE_2D)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT)
  gl.uniform1i(u.uCaustic, 0)

  const rippleTex = gl.createTexture()
  gl.activeTexture(gl.TEXTURE1)
  gl.bindTexture(gl.TEXTURE_2D, rippleTex)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1)
  gl.uniform1i(u.uRipple, 1)

  // ── Ripple grid ──────────────────────────────────────────────────────────
  let W = 0
  let H = 0
  let cur = new Float32Array(0)
  let prev = new Float32Array(0)
  let bytes = new Uint8Array(0)
  let viewW = 0
  let viewH = 0

  function resize() {
    viewW = window.innerWidth
    viewH = window.innerHeight
    // Caustics are soft: half the device pixels is plenty, and cheap.
    const scale = Math.min(window.devicePixelRatio || 1, 2) * 0.5
    canvas.width = Math.max(1, Math.round(viewW * scale))
    canvas.height = Math.max(1, Math.round(viewH * scale))
    gl.viewport(0, 0, canvas.width, canvas.height)

    W = Math.max(8, Math.ceil(viewW / CELL_PX))
    H = Math.max(8, Math.ceil(viewH / CELL_PX))
    cur = new Float32Array(W * H)
    prev = new Float32Array(W * H)
    bytes = new Uint8Array(W * H).fill(128)
    gl.activeTexture(gl.TEXTURE1)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, W, H, 0, gl.RED, gl.UNSIGNED_BYTE, bytes)
    gl.uniform2f(u.uView, viewW, viewH)
    gl.uniform2f(u.uTexel, 1 / W, 1 / H)
  }

  /** Push the surface down around a grid point; `amount` in surface units. */
  function press(gx, gy, amount) {
    const cx = Math.round(gx)
    const cy = Math.round(gy)
    for (let dy = -2; dy <= 2; dy++) {
      const y = cy + dy
      if (y < 1 || y >= H - 1) continue
      for (let dx = -2; dx <= 2; dx++) {
        const x = cx + dx
        if (x < 1 || x >= W - 1) continue
        const d2 = dx * dx + dy * dy
        if (d2 > 4) continue
        cur[y * W + x] -= amount * (1 - d2 / 5)
      }
    }
  }

  function step() {
    // next = (sum of neighbours) / 2 − previous, damped; written into prev.
    for (let y = 1; y < H - 1; y++) {
      for (let x = 1; x < W - 1; x++) {
        const i = y * W + x
        prev[i] = ((cur[i - 1] + cur[i + 1] + cur[i - W] + cur[i + W]) * 0.5 - prev[i]) * DAMPING
      }
    }
    const t = cur
    cur = prev
    prev = t
  }

  function upload() {
    for (let i = 0; i < cur.length; i++) {
      const h = cur[i] < -1 ? -1 : cur[i] > 1 ? 1 : cur[i]
      bytes[i] = (h * 0.5 + 0.5) * 255
    }
    gl.activeTexture(gl.TEXTURE1)
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, W, H, gl.RED, gl.UNSIGNED_BYTE, bytes)
  }

  // ── Pointer wake ─────────────────────────────────────────────────────────
  let last = null
  const trail = []
  function onPointerMove(e) {
    trail.push({ x: e.clientX, y: e.clientY })
  }
  function onPointerLeave() {
    last = null
  }
  function applyTrail() {
    for (const pt of trail) {
      if (last) {
        const dx = pt.x - last.x
        const dy = pt.y - last.y
        const len = Math.hypot(dx, dy)
        // Faster strokes make a stronger wake, up to a gentle cap.
        const amount = Math.min(0.06 + len * 0.004, 0.25)
        const steps = Math.max(1, Math.ceil(len / CELL_PX))
        for (let s = 1; s <= steps; s++) {
          const k = s / steps
          press(((last.x + dx * k) / viewW) * W, ((last.y + dy * k) / viewH) * H, amount / steps)
        }
      }
      last = pt
    }
    trail.length = 0
  }

  // ── Drawing ──────────────────────────────────────────────────────────────
  function setDark(isDark) {
    const look = isDark ? LOOK.dark : LOOK.light
    gl.uniform3fv(u.uTint, look.tint)
    gl.uniform1f(u.uAlpha, look.alpha)
    if (still) draw(0)
  }

  function draw(seconds) {
    gl.uniform1f(u.uTime, seconds)
    gl.uniform1f(u.uScroll, window.scrollY)
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }

  let raf = 0
  let lastFrame = 0
  const t0 = performance.now()
  function frame(now) {
    raf = requestAnimationFrame(frame)
    if (now - lastFrame < 1000 / FPS) return
    lastFrame = now
    applyTrail()
    step()
    upload()
    draw((now - t0) / 1000)
  }

  function onResize() {
    resize()
    if (still) draw(0)
  }
  // Still mode only: keep the slow scroll parallax without an animation loop.
  const onScroll = () => draw(0)

  let lost = false
  function onContextLost(e) {
    e.preventDefault()
    lost = true
    cancelAnimationFrame(raf)
  }

  resize()
  setDark(dark)
  window.addEventListener('resize', onResize)
  canvas.addEventListener('webglcontextlost', onContextLost)
  if (still) {
    window.addEventListener('scroll', onScroll, { passive: true })
    draw(0)
  } else {
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('pointerleave', onPointerLeave)
    raf = requestAnimationFrame(frame)
  }

  return {
    setDark: (isDark) => !lost && setDark(isDark),
    destroy() {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerleave', onPointerLeave)
      canvas.removeEventListener('webglcontextlost', onContextLost)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    },
  }
}
