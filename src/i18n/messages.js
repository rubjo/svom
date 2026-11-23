/**
 * Page copy. Norwegian is the source; the app's own strings
 * (svom/src/composables/useI18n.js) are reused wherever they say the same
 * thing, so the page and the paywall never disagree.
 */
export const messages = {
  nb: {
    meta: {
      title: 'Svøm! – live-tider og statistikk fra svømmestevnene',
      description:
        'Live-tider, heat, resultater og statistikk fra svømmestevnene – i én rask app for svømmere, foreldre og trenere.',
    },
    nav: { features: 'Funksjoner', gallery: 'Skjermbilder', pricing: 'Priser', faq: 'Spørsmål' },
    language: 'Språk',
    lightbox: { prev: 'Forrige', next: 'Neste', close: 'Lukk' },
    appStore: { small: 'Last ned i', big: 'App Store' },
    hero: {
      eyebrow: 'Live fra bassengkanten',
      title1: 'Hvert løp.',
      title2: 'Hvert sekund.',
      lead: 'Svøm! samler live-tider, heat, resultater og statistikk fra svømmestevnene – i én rask app for svømmere, foreldre og trenere.',
      trial: 'Familie: første måned gratis',
      platforms: 'For iPhone og iPad',
    },
    heroCard: { event: 'Øvelse 7. 100m fri, herrer', heat: 'Heat 1 / 2', pr: 'Ny PR', restart: 'Start løpet på nytt' },
    highlights: [
      { icon: 'i-lucide-radio', title: 'Live', text: 'Tider og heat mens stevnet pågår' },
      { icon: 'i-lucide-chart-spline', title: 'Statistikk', text: 'Hele karrieren i grafer' },
      { icon: 'i-lucide-bell-ring', title: 'Varsler', text: 'Før start og når resultatet er klart' },
      { icon: 'i-lucide-users', title: 'Familie', text: 'Del med opptil fem i familiedelingen' },
    ],
    features: {
      kicker: 'Funksjoner',
      title: 'Alt du lurer på fra tribunen',
      lead: 'Fra første heat til siste resultat – og alle løpene før det.',
      rows: [
        {
          kicker: 'Live',
          title: 'Følg heatet mens det svømmes',
          text: 'Se hva som skjer i bassenget akkurat nå – øvelse, heat og baner – og gå rett til live-heatet med ett trykk.',
          points: [
            'Live-klokke og heat i sanntid',
            'Programmet for hele stevnet, dag for dag',
            'Varsel før favorittene dine går i vannet',
          ],
        },
        {
          kicker: 'Statistikk',
          title: 'Utviklingen, splitt for splitt',
          text: 'Alle løpene til en svømmer, samlet og tegnet opp: trend over tid, splitter, heatmap og PR-radar.',
          points: [
            'Trend og heatmap over flere sesonger',
            'Splittflyt og splittutvikling per øvelse',
            'Sammenlign med forrige og raskeste løp',
          ],
        },
        {
          kicker: 'Meritter',
          title: 'Rekorder som fortjener en medalje',
          text: 'Personlige rekorder, årsrangeringer og medaljer – og sesongens edelstener for det svømmeren har fått til.',
          points: [
            'Personlige rekorder per øvelse og bassenglengde',
            'Årsrangering i klassen og totalt',
            'Medaljer og edelstener for rangeringer og prestasjoner',
          ],
        },
      ],
      grid: [
        { icon: 'i-lucide-heart', title: 'Favoritter', text: 'Merk svømmere og klubber, og se bare dem i programmet.' },
        { icon: 'i-lucide-users-round', title: 'Klubber', text: 'Hele klubben samlet: hvem som svømmer hva, og resultatene etterpå.' },
        { icon: 'i-lucide-trophy', title: 'Resultater', text: 'Resultatlistene for hele stevnet, øvelse for øvelse.' },
        { icon: 'i-lucide-target', title: 'Krav', text: 'Kvalifikasjonskravene, og hvor nær svømmeren er.' },
        { icon: 'i-lucide-bell-ring', title: 'Varsler', text: 'Beskjed før favorittene starter og når resultatene er klare.' },
        { icon: 'i-lucide-languages', title: 'Lett å lese', text: 'Lys og mørk modus, større tekst og fem språk.' },
      ],
    },
    gallery: {
      kicker: 'Skjermbilder',
      title: 'Laget for kanten av bassenget',
      captions: {
        home: 'Pågående, kommende og tidligere stevner',
        'race-detail': 'Løpet i detalj',
        'swimmer-trend': 'Utvikling over tid',
        'swimmer-heatmap': 'Heatmap',
        'swimmer-gems': 'Sesongens edelstener',
        'swimmer-qual': 'Kvalifikasjonskrav',
        'club-panel': 'Klubbens medaljer, perser og poeng',
        'club-swimmers': 'Klubbens svømmere',
        results: 'Resultater',
        'swimmer-radar': 'PR-radar',
      },
    },
    pricing: {
      kicker: 'Priser',
      title: 'Ett abonnement. Hele appen.',
      lead: 'Alt i appen, for deg eller hele familien.',
      monthly: 'Månedlig',
      yearly: 'Årlig',
      single: 'For deg',
      singleDesc: 'Én Apple-ID',
      family: 'Familie',
      familyDesc: 'Del med opptil fem i familiedelingen',
      perMonth: 'per måned',
      perYear: 'per år',
      save: 'Spar {n} %',
      features: [
        'Live-tider og heat fra stevnene',
        'Statistikk, splitter og utvikling for svømmerne dine',
        'Varsler før start og når resultatene er klare',
      ],
      cta: 'Start gratis prøveperiode',
      ctaSingle: 'Abonner',
      trial: 'Første måned gratis for nye abonnenter',
      noTrial: 'Si opp når som helst i App Store',
      note: 'Priser i norske kroner – App Store viser prisen i din valuta. Abonnementet fornyes automatisk og kan sies opp når som helst i App Store.',
    },
    faq: {
      kicker: 'Spørsmål',
      title: 'Godt å vite',
      items: [
        {
          label: 'Hvilke stevner finnes i Svøm!?',
          content:
            'Norske svømmestevner som publiseres av Norges Svømmeforbund – pågående, kommende og tidligere.',
        },
        {
          label: 'Trenger jeg en konto?',
          content:
            'Nei. Abonnementet er knyttet til Apple-ID-en din, og favorittene dine lagres på enheten.',
        },
        {
          label: 'Hvordan fungerer familieabonnementet?',
          content:
            'Familieabonnementet deles gjennom Familiedeling hos Apple, med opptil fem andre. Alle får hele appen på sine egne enheter.',
        },
        {
          label: 'Kan jeg prøve før jeg betaler?',
          content:
            'Ja, med familieabonnementet: nye abonnenter får første måned gratis. Sier du opp før prøveperioden er over, betaler du ingenting.',
        },
        {
          label: 'Hvordan sier jeg opp?',
          content:
            'I Innstillinger på iPhone: trykk på navnet ditt → Abonnementer → Svøm!. Du beholder tilgangen ut perioden du har betalt for.',
        },
      ],
    },
    cta: {
      title: 'Klar for neste stevne?',
      text: 'Last ned Svøm! Familieabonnementet har første måned gratis.',
    },
    footer: { support: 'Support', terms: 'Vilkår for bruk', privacy: 'Personvern' },
  },

  en: {
    meta: {
      title: 'Svøm! – live times and stats from the swim meets',
      description:
        'Live times, heats, results and stats from the swim meets – in one fast app for swimmers, parents and coaches.',
    },
    nav: { features: 'Features', gallery: 'Screenshots', pricing: 'Pricing', faq: 'FAQ' },
    language: 'Language',
    lightbox: { prev: 'Previous', next: 'Next', close: 'Close' },
    appStore: { small: 'Download on the', big: 'App Store' },
    hero: {
      eyebrow: 'Live from the pool deck',
      title1: 'Every race.',
      title2: 'Every second.',
      lead: 'Svøm! brings live times, heats, results and stats from the swim meets together – in one fast app for swimmers, parents and coaches.',
      trial: 'Family: first month free',
      platforms: 'For iPhone and iPad',
    },
    heroCard: { event: 'Event 7. 100m free, men', heat: 'Heat 1 / 2', pr: 'New PB', restart: 'Restart the race' },
    highlights: [
      { icon: 'i-lucide-radio', title: 'Live', text: 'Times and heats while the meet is on' },
      { icon: 'i-lucide-chart-spline', title: 'Stats', text: 'A whole career in charts' },
      { icon: 'i-lucide-bell-ring', title: 'Alerts', text: 'Before the start and when results are in' },
      { icon: 'i-lucide-users', title: 'Family', text: 'Share with up to five in Family Sharing' },
    ],
    features: {
      kicker: 'Features',
      title: 'Everything you wonder about in the stands',
      lead: 'From the first heat to the final result – and every race before it.',
      rows: [
        {
          kicker: 'Live',
          title: 'Follow the heat as it’s swum',
          text: 'See what’s happening in the pool right now – event, heat and lanes – and jump straight to the live heat with one tap.',
          points: [
            'Live clock and heats in real time',
            'The whole meet’s program, day by day',
            'An alert before your favourites hit the water',
          ],
        },
        {
          kicker: 'Stats',
          title: 'Progress, split by split',
          text: 'Every race a swimmer has swum, gathered and charted: trend over time, splits, heatmap and PB radar.',
          points: [
            'Trend and heatmap across seasons',
            'Split flow and split development per event',
            'Compare with the previous and fastest race',
          ],
        },
        {
          kicker: 'Achievements',
          title: 'Records that deserve a medal',
          text: 'Personal bests, yearly rankings and medals – plus the season’s gems for what the swimmer has achieved.',
          points: [
            'Personal bests per event and pool length',
            'Yearly ranking in the age group and overall',
            'Medals and gems for rankings and achievements',
          ],
        },
      ],
      grid: [
        { icon: 'i-lucide-heart', title: 'Favourites', text: 'Mark swimmers and clubs, and see only them in the program.' },
        { icon: 'i-lucide-users-round', title: 'Clubs', text: 'The whole club in one place: who swims what, and the results after.' },
        { icon: 'i-lucide-trophy', title: 'Results', text: 'Result lists for the whole meet, event by event.' },
        { icon: 'i-lucide-target', title: 'Qualifying times', text: 'The qualifying standards, and how close the swimmer is.' },
        { icon: 'i-lucide-bell-ring', title: 'Alerts', text: 'A heads-up before your favourites start and when results are in.' },
        { icon: 'i-lucide-languages', title: 'Easy to read', text: 'Light and dark mode, larger text and five languages.' },
      ],
    },
    gallery: {
      kicker: 'Screenshots',
      title: 'Made for the side of the pool',
      captions: {
        home: 'Live, upcoming and past meets',
        'race-detail': 'The race in detail',
        'swimmer-trend': 'Progress over time',
        'swimmer-heatmap': 'Heatmap',
        'swimmer-gems': 'The season’s gems',
        'swimmer-qual': 'Qualifying times',
        'club-panel': 'The club’s medals, PBs and points',
        'club-swimmers': 'The club’s swimmers',
        results: 'Results',
        'swimmer-radar': 'PB radar',
      },
    },
    pricing: {
      kicker: 'Pricing',
      title: 'One subscription. The whole app.',
      lead: 'The whole app, for you or your whole family.',
      monthly: 'Monthly',
      yearly: 'Yearly',
      single: 'Just you',
      singleDesc: 'One Apple Account',
      family: 'Family',
      familyDesc: 'Share with up to five people in Family Sharing',
      perMonth: 'per month',
      perYear: 'per year',
      save: 'Save {n}%',
      features: [
        'Live times and heats from the meets',
        'Stats, splits and progress for your swimmers',
        'Alerts before the start and when results are in',
      ],
      cta: 'Start free trial',
      ctaSingle: 'Subscribe',
      trial: 'First month free for new subscribers',
      noTrial: 'Cancel any time in the App Store',
      note: 'Prices in Norwegian kroner – the App Store shows the price in your currency. The subscription renews automatically and can be cancelled any time in the App Store.',
    },
    faq: {
      kicker: 'FAQ',
      title: 'Good to know',
      items: [
        {
          label: 'Which meets are in Svøm!?',
          content:
            'Norwegian swim meets published by the Norwegian Swimming Federation – live, upcoming and past.',
        },
        {
          label: 'Do I need an account?',
          content:
            'No. The subscription is tied to your Apple Account, and your favourites are stored on your device.',
        },
        {
          label: 'How does the family plan work?',
          content:
            'The family plan is shared through Apple’s Family Sharing with up to five others. Everyone gets the whole app on their own devices.',
        },
        {
          label: 'Can I try it before I pay?',
          content:
            'Yes, with the family plan: new subscribers get the first month free. Cancel before the trial ends and you pay nothing.',
        },
        {
          label: 'How do I cancel?',
          content:
            'In Settings on your iPhone: tap your name → Subscriptions → Svøm!. You keep access until the end of the period you’ve paid for.',
        },
      ],
    },
    cta: {
      title: 'Ready for the next meet?',
      text: 'Download Svøm! The family plan comes with the first month free.',
    },
    footer: { support: 'Support', terms: 'Terms of Use', privacy: 'Privacy Policy' },
  },

  de: {
    meta: {
      title: 'Svøm! – Live-Zeiten und Statistiken von den Schwimmwettkämpfen',
      description:
        'Live-Zeiten, Läufe, Ergebnisse und Statistiken von den Schwimmwettkämpfen – in einer schnellen App für Schwimmer, Eltern und Trainer.',
    },
    nav: { features: 'Funktionen', gallery: 'Screenshots', pricing: 'Preise', faq: 'Fragen' },
    language: 'Sprache',
    lightbox: { prev: 'Zurück', next: 'Weiter', close: 'Schließen' },
    appStore: { small: 'Laden im', big: 'App Store' },
    hero: {
      eyebrow: 'Live vom Beckenrand',
      title1: 'Jedes Rennen.',
      title2: 'Jede Sekunde.',
      lead: 'Svøm! bündelt Live-Zeiten, Läufe, Ergebnisse und Statistiken von den Schwimmwettkämpfen – in einer schnellen App für Schwimmer, Eltern und Trainer.',
      trial: 'Familie: erster Monat gratis',
      platforms: 'Für iPhone und iPad',
    },
    heroCard: { event: 'Wettkampf 7. 100m Freistil, Herren', heat: 'Lauf 1 / 2', pr: 'Neue Bestzeit', restart: 'Rennen neu starten' },
    highlights: [
      { icon: 'i-lucide-radio', title: 'Live', text: 'Zeiten und Läufe während des Wettkampfs' },
      { icon: 'i-lucide-chart-spline', title: 'Statistik', text: 'Die ganze Karriere in Diagrammen' },
      { icon: 'i-lucide-bell-ring', title: 'Hinweise', text: 'Vor dem Start und sobald Ergebnisse da sind' },
      { icon: 'i-lucide-users', title: 'Familie', text: 'Mit bis zu fünf Personen teilen' },
    ],
    features: {
      kicker: 'Funktionen',
      title: 'Alles, was du auf der Tribüne wissen willst',
      lead: 'Vom ersten Lauf bis zum letzten Ergebnis – und alle Rennen davor.',
      rows: [
        {
          kicker: 'Live',
          title: 'Den Lauf verfolgen, während er geschwommen wird',
          text: 'Sieh, was gerade im Becken passiert – Wettkampf, Lauf und Bahnen – und spring mit einem Tipp direkt zum Live-Lauf.',
          points: [
            'Live-Uhr und Läufe in Echtzeit',
            'Das Programm des ganzen Wettkampfs, Tag für Tag',
            'Ein Hinweis, bevor deine Favoriten ins Wasser gehen',
          ],
        },
        {
          kicker: 'Statistik',
          title: 'Die Entwicklung, Zwischenzeit für Zwischenzeit',
          text: 'Alle Rennen eines Schwimmers, gesammelt und dargestellt: Trend, Zwischenzeiten, Heatmap und Bestzeit-Radar.',
          points: [
            'Trend und Heatmap über mehrere Saisons',
            'Zwischenzeitenfluss und -entwicklung je Strecke',
            'Vergleich mit dem letzten und dem schnellsten Rennen',
          ],
        },
        {
          kicker: 'Erfolge',
          title: 'Rekorde, die eine Medaille verdienen',
          text: 'Bestzeiten, Jahresranglisten und Medaillen – dazu die Edelsteine der Saison für das, was der Schwimmer erreicht hat.',
          points: [
            'Bestzeiten je Strecke und Beckenlänge',
            'Jahresrangliste im Jahrgang und gesamt',
            'Medaillen und Edelsteine für Platzierungen und Leistungen',
          ],
        },
      ],
      grid: [
        { icon: 'i-lucide-heart', title: 'Favoriten', text: 'Schwimmer und Vereine markieren und nur sie im Programm sehen.' },
        { icon: 'i-lucide-users-round', title: 'Vereine', text: 'Der ganze Verein auf einen Blick: wer was schwimmt, und die Ergebnisse.' },
        { icon: 'i-lucide-trophy', title: 'Ergebnisse', text: 'Ergebnislisten des ganzen Wettkampfs, Strecke für Strecke.' },
        { icon: 'i-lucide-target', title: 'Pflichtzeiten', text: 'Die Qualifikationsnormen, und wie nah der Schwimmer dran ist.' },
        { icon: 'i-lucide-bell-ring', title: 'Hinweise', text: 'Bescheid vor dem Start deiner Favoriten und sobald Ergebnisse da sind.' },
        { icon: 'i-lucide-languages', title: 'Gut lesbar', text: 'Heller und dunkler Modus, größere Schrift und fünf Sprachen.' },
      ],
    },
    gallery: {
      kicker: 'Screenshots',
      title: 'Gemacht für den Beckenrand',
      captions: {
        home: 'Laufende, kommende und vergangene Wettkämpfe',
        'race-detail': 'Das Rennen im Detail',
        'swimmer-trend': 'Entwicklung über die Zeit',
        'swimmer-heatmap': 'Heatmap',
        'swimmer-gems': 'Edelsteine der Saison',
        'swimmer-qual': 'Pflichtzeiten',
        'club-panel': 'Medaillen, Bestzeiten und Punkte des Vereins',
        'club-swimmers': 'Die Schwimmer des Vereins',
        results: 'Ergebnisse',
        'swimmer-radar': 'Bestzeit-Radar',
      },
    },
    pricing: {
      kicker: 'Preise',
      title: 'Ein Abo. Die ganze App.',
      lead: 'Die ganze App, für dich oder die ganze Familie.',
      monthly: 'Monatlich',
      yearly: 'Jährlich',
      single: 'Für dich',
      singleDesc: 'Ein Apple Account',
      family: 'Familie',
      familyDesc: 'Mit bis zu fünf Personen in der Familienfreigabe teilen',
      perMonth: 'pro Monat',
      perYear: 'pro Jahr',
      save: '{n} % sparen',
      features: [
        'Live-Zeiten und Läufe von den Wettkämpfen',
        'Statistiken, Zwischenzeiten und Entwicklung deiner Schwimmer',
        'Hinweise vor dem Start und sobald Ergebnisse da sind',
      ],
      cta: 'Gratis testen',
      ctaSingle: 'Abonnieren',
      trial: 'Erster Monat gratis für neue Abonnenten',
      noTrial: 'Jederzeit im App Store kündbar',
      note: 'Preise in norwegischen Kronen – der App Store zeigt den Preis in deiner Währung. Das Abo verlängert sich automatisch und ist jederzeit im App Store kündbar.',
    },
    faq: {
      kicker: 'Fragen',
      title: 'Gut zu wissen',
      items: [
        {
          label: 'Welche Wettkämpfe gibt es in Svøm!?',
          content:
            'Norwegische Schwimmwettkämpfe, die vom Norwegischen Schwimmverband veröffentlicht werden – laufende, kommende und vergangene.',
        },
        {
          label: 'Brauche ich ein Konto?',
          content:
            'Nein. Das Abo ist an deinen Apple Account gebunden, und deine Favoriten werden auf dem Gerät gespeichert.',
        },
        {
          label: 'Wie funktioniert das Familienabo?',
          content:
            'Das Familienabo wird über Apples Familienfreigabe mit bis zu fünf weiteren Personen geteilt. Alle bekommen die ganze App auf ihren eigenen Geräten.',
        },
        {
          label: 'Kann ich vor dem Bezahlen testen?',
          content:
            'Ja, mit dem Familienabo: Neue Abonnenten bekommen den ersten Monat gratis. Kündigst du vor dem Ende des Testzeitraums, zahlst du nichts.',
        },
        {
          label: 'Wie kündige ich?',
          content:
            'In den Einstellungen auf dem iPhone: auf deinen Namen tippen → Abonnements → Svøm!. Der Zugang bleibt bis zum Ende des bezahlten Zeitraums.',
        },
      ],
    },
    cta: {
      title: 'Bereit für den nächsten Wettkampf?',
      text: 'Lade Svøm! Das Familienabo hat den ersten Monat gratis.',
    },
    footer: { support: 'Support', terms: 'Nutzungsbedingungen', privacy: 'Datenschutz' },
  },

  fr: {
    meta: {
      title: 'Svøm! – temps en direct et statistiques des compétitions de natation',
      description:
        'Temps en direct, séries, résultats et statistiques des compétitions de natation – dans une app rapide pour nageurs, parents et entraîneurs.',
    },
    nav: { features: 'Fonctions', gallery: 'Captures', pricing: 'Tarifs', faq: 'Questions' },
    language: 'Langue',
    lightbox: { prev: 'Précédent', next: 'Suivant', close: 'Fermer' },
    appStore: { small: 'Télécharger dans', big: 'l’App Store' },
    hero: {
      eyebrow: 'En direct du bord du bassin',
      title1: 'Chaque course.',
      title2: 'Chaque seconde.',
      lead: 'Svøm! réunit les temps en direct, les séries, les résultats et les statistiques des compétitions – dans une app rapide pour nageurs, parents et entraîneurs.',
      trial: 'Famille : premier mois gratuit',
      platforms: 'Pour iPhone et iPad',
    },
    heroCard: { event: 'Épreuve 7. 100m nage libre, hommes', heat: 'Série 1 / 2', pr: 'Nouveau record', restart: 'Relancer la course' },
    highlights: [
      { icon: 'i-lucide-radio', title: 'Direct', text: 'Temps et séries pendant la compétition' },
      { icon: 'i-lucide-chart-spline', title: 'Statistiques', text: 'Toute une carrière en graphiques' },
      { icon: 'i-lucide-bell-ring', title: 'Alertes', text: 'Avant le départ et dès que les résultats tombent' },
      { icon: 'i-lucide-users', title: 'Famille', text: 'À partager avec jusqu’à cinq personnes' },
    ],
    features: {
      kicker: 'Fonctions',
      title: 'Tout ce qu’on se demande dans les tribunes',
      lead: 'De la première série au dernier résultat – et toutes les courses d’avant.',
      rows: [
        {
          kicker: 'Direct',
          title: 'Suivez la série pendant qu’elle se nage',
          text: 'Voyez ce qui se passe dans le bassin en ce moment – épreuve, série et couloirs – et allez droit à la série en direct d’un geste.',
          points: [
            'Chrono et séries en temps réel',
            'Le programme de toute la compétition, jour par jour',
            'Une alerte avant que vos favoris n’entrent dans l’eau',
          ],
        },
        {
          kicker: 'Statistiques',
          title: 'La progression, temps de passage après temps de passage',
          text: 'Toutes les courses d’un nageur, réunies et tracées : tendance, temps de passage, heatmap et radar des records.',
          points: [
            'Tendance et heatmap sur plusieurs saisons',
            'Flux et évolution des temps de passage par épreuve',
            'Comparaison avec la course précédente et la plus rapide',
          ],
        },
        {
          kicker: 'Palmarès',
          title: 'Des records qui méritent une médaille',
          text: 'Records personnels, classements annuels et médailles – et les pierres précieuses de la saison pour ce que le nageur a accompli.',
          points: [
            'Records personnels par épreuve et longueur de bassin',
            'Classement annuel dans la catégorie et au général',
            'Médailles et pierres précieuses pour les classements et les performances',
          ],
        },
      ],
      grid: [
        { icon: 'i-lucide-heart', title: 'Favoris', text: 'Marquez nageurs et clubs, et ne voyez qu’eux dans le programme.' },
        { icon: 'i-lucide-users-round', title: 'Clubs', text: 'Tout le club au même endroit : qui nage quoi, puis les résultats.' },
        { icon: 'i-lucide-trophy', title: 'Résultats', text: 'Les résultats de toute la compétition, épreuve par épreuve.' },
        { icon: 'i-lucide-target', title: 'Temps qualificatifs', text: 'Les minima, et à quel point le nageur s’en approche.' },
        { icon: 'i-lucide-bell-ring', title: 'Alertes', text: 'Un signal avant le départ de vos favoris et dès les résultats.' },
        { icon: 'i-lucide-languages', title: 'Facile à lire', text: 'Mode clair et sombre, texte plus grand et cinq langues.' },
      ],
    },
    gallery: {
      kicker: 'Captures',
      title: 'Pensée pour le bord du bassin',
      captions: {
        home: 'Compétitions en cours, à venir et passées',
        'race-detail': 'La course en détail',
        'swimmer-trend': 'La progression dans le temps',
        'swimmer-heatmap': 'Heatmap',
        'swimmer-gems': 'Les pierres précieuses de la saison',
        'swimmer-qual': 'Temps qualificatifs',
        'club-panel': 'Médailles, records et points du club',
        'club-swimmers': 'Les nageurs du club',
        results: 'Résultats',
        'swimmer-radar': 'Radar des records',
      },
    },
    pricing: {
      kicker: 'Tarifs',
      title: 'Un abonnement. Toute l’app.',
      lead: 'Toute l’app, pour vous ou toute la famille.',
      monthly: 'Mensuel',
      yearly: 'Annuel',
      single: 'Pour vous',
      singleDesc: 'Un compte Apple',
      family: 'Famille',
      familyDesc: 'À partager avec jusqu’à cinq personnes via le partage familial',
      perMonth: 'par mois',
      perYear: 'par an',
      save: '{n} % d’économie',
      features: [
        'Temps et séries en direct des compétitions',
        'Statistiques, temps de passage et progression de vos nageurs',
        'Alertes avant le départ et dès que les résultats tombent',
      ],
      cta: 'Commencer l’essai gratuit',
      ctaSingle: 'S’abonner',
      trial: 'Premier mois gratuit pour les nouveaux abonnés',
      noTrial: 'Résiliable à tout moment dans l’App Store',
      note: 'Prix en couronnes norvégiennes – l’App Store affiche le prix dans votre devise. L’abonnement se renouvelle automatiquement et peut être résilié à tout moment dans l’App Store.',
    },
    faq: {
      kicker: 'Questions',
      title: 'Bon à savoir',
      items: [
        {
          label: 'Quelles compétitions trouve-t-on dans Svøm! ?',
          content:
            'Les compétitions de natation norvégiennes publiées par la Fédération norvégienne de natation – en cours, à venir et passées.',
        },
        {
          label: 'Faut-il un compte ?',
          content:
            'Non. L’abonnement est lié à votre compte Apple, et vos favoris sont enregistrés sur l’appareil.',
        },
        {
          label: 'Comment fonctionne la formule Famille ?',
          content:
            'La formule Famille se partage via le partage familial d’Apple, avec jusqu’à cinq autres personnes. Chacun a toute l’app sur ses propres appareils.',
        },
        {
          label: 'Puis-je essayer avant de payer ?',
          content:
            'Oui, avec la formule Famille : les nouveaux abonnés ont le premier mois gratuit. Résiliez avant la fin de l’essai et vous ne payez rien.',
        },
        {
          label: 'Comment résilier ?',
          content:
            'Dans Réglages sur l’iPhone : touchez votre nom → Abonnements → Svøm!. L’accès reste actif jusqu’à la fin de la période payée.',
        },
      ],
    },
    cta: {
      title: 'Prêt pour la prochaine compétition ?',
      text: 'Téléchargez Svøm! La formule Famille offre le premier mois.',
    },
    footer: { support: 'Assistance', terms: 'Conditions d’utilisation', privacy: 'Confidentialité' },
  },

  es: {
    meta: {
      title: 'Svøm! – tiempos en directo y estadísticas de las competiciones de natación',
      description:
        'Tiempos en directo, series, resultados y estadísticas de las competiciones de natación, en una app rápida para nadadores, padres y entrenadores.',
    },
    nav: { features: 'Funciones', gallery: 'Capturas', pricing: 'Precios', faq: 'Preguntas' },
    language: 'Idioma',
    lightbox: { prev: 'Anterior', next: 'Siguiente', close: 'Cerrar' },
    appStore: { small: 'Descárgala en el', big: 'App Store' },
    hero: {
      eyebrow: 'En directo desde el borde de la piscina',
      title1: 'Cada carrera.',
      title2: 'Cada segundo.',
      lead: 'Svøm! reúne tiempos en directo, series, resultados y estadísticas de las competiciones, en una app rápida para nadadores, padres y entrenadores.',
      trial: 'Familiar: primer mes gratis',
      platforms: 'Para iPhone y iPad',
    },
    heroCard: { event: 'Prueba 7. 100m libre, hombres', heat: 'Serie 1 / 2', pr: 'Nueva marca', restart: 'Reiniciar la carrera' },
    highlights: [
      { icon: 'i-lucide-radio', title: 'Directo', text: 'Tiempos y series durante la competición' },
      { icon: 'i-lucide-chart-spline', title: 'Estadísticas', text: 'Toda una carrera en gráficos' },
      { icon: 'i-lucide-bell-ring', title: 'Avisos', text: 'Antes de la salida y cuando hay resultados' },
      { icon: 'i-lucide-users', title: 'Familia', text: 'Compártela con hasta cinco personas' },
    ],
    features: {
      kicker: 'Funciones',
      title: 'Todo lo que te preguntas desde la grada',
      lead: 'De la primera serie al último resultado, y todas las carreras anteriores.',
      rows: [
        {
          kicker: 'Directo',
          title: 'Sigue la serie mientras se nada',
          text: 'Mira lo que pasa en la piscina ahora mismo – prueba, serie y calles – y salta a la serie en directo con un toque.',
          points: [
            'Crono y series en tiempo real',
            'El programa de toda la competición, día a día',
            'Un aviso antes de que tus favoritos se tiren al agua',
          ],
        },
        {
          kicker: 'Estadísticas',
          title: 'La evolución, parcial a parcial',
          text: 'Todas las carreras de un nadador, reunidas y dibujadas: tendencia, parciales, heatmap y radar de marcas.',
          points: [
            'Tendencia y heatmap a lo largo de varias temporadas',
            'Flujo y evolución de parciales por prueba',
            'Comparación con la carrera anterior y la más rápida',
          ],
        },
        {
          kicker: 'Logros',
          title: 'Marcas que merecen una medalla',
          text: 'Mejores marcas, rankings anuales y medallas, y las gemas de la temporada por lo que ha logrado el nadador.',
          points: [
            'Mejores marcas por prueba y longitud de piscina',
            'Ranking anual en la categoría y absoluto',
            'Medallas y gemas por clasificaciones y logros',
          ],
        },
      ],
      grid: [
        { icon: 'i-lucide-heart', title: 'Favoritos', text: 'Marca nadadores y clubes, y ve solo a ellos en el programa.' },
        { icon: 'i-lucide-users-round', title: 'Clubes', text: 'Todo el club en un sitio: quién nada qué, y los resultados después.' },
        { icon: 'i-lucide-trophy', title: 'Resultados', text: 'Los resultados de toda la competición, prueba a prueba.' },
        { icon: 'i-lucide-target', title: 'Mínimas', text: 'Las marcas mínimas, y lo cerca que está el nadador.' },
        { icon: 'i-lucide-bell-ring', title: 'Avisos', text: 'Un aviso antes de que salgan tus favoritos y cuando hay resultados.' },
        { icon: 'i-lucide-languages', title: 'Fácil de leer', text: 'Modo claro y oscuro, texto más grande y cinco idiomas.' },
      ],
    },
    gallery: {
      kicker: 'Capturas',
      title: 'Hecha para el borde de la piscina',
      captions: {
        home: 'Competiciones en curso, próximas y pasadas',
        'race-detail': 'La carrera en detalle',
        'swimmer-trend': 'Evolución en el tiempo',
        'swimmer-heatmap': 'Heatmap',
        'swimmer-gems': 'Las gemas de la temporada',
        'swimmer-qual': 'Mínimas',
        'club-panel': 'Medallas, marcas y puntos del club',
        'club-swimmers': 'Los nadadores del club',
        results: 'Resultados',
        'swimmer-radar': 'Radar de marcas',
      },
    },
    pricing: {
      kicker: 'Precios',
      title: 'Una suscripción. Toda la app.',
      lead: 'Toda la app, para ti o para toda la familia.',
      monthly: 'Mensual',
      yearly: 'Anual',
      single: 'Para ti',
      singleDesc: 'Una cuenta de Apple',
      family: 'Familiar',
      familyDesc: 'Compártelo con hasta cinco personas en En familia',
      perMonth: 'al mes',
      perYear: 'al año',
      save: 'Ahorra un {n} %',
      features: [
        'Tiempos y series en directo de las competiciones',
        'Estadísticas, parciales y evolución de tus nadadores',
        'Avisos antes de la salida y cuando hay resultados',
      ],
      cta: 'Empezar prueba gratuita',
      ctaSingle: 'Suscribirse',
      trial: 'Primer mes gratis para nuevos suscriptores',
      noTrial: 'Cancela cuando quieras en el App Store',
      note: 'Precios en coronas noruegas: el App Store muestra el precio en tu moneda. La suscripción se renueva automáticamente y se puede cancelar en cualquier momento en el App Store.',
    },
    faq: {
      kicker: 'Preguntas',
      title: 'Bueno saberlo',
      items: [
        {
          label: '¿Qué competiciones hay en Svøm!?',
          content:
            'Competiciones de natación noruegas publicadas por la Federación Noruega de Natación: en curso, próximas y pasadas.',
        },
        {
          label: '¿Necesito una cuenta?',
          content:
            'No. La suscripción va ligada a tu cuenta de Apple, y tus favoritos se guardan en el dispositivo.',
        },
        {
          label: '¿Cómo funciona el plan familiar?',
          content:
            'El plan familiar se comparte mediante En familia de Apple, con hasta cinco personas más. Cada uno tiene toda la app en sus propios dispositivos.',
        },
        {
          label: '¿Puedo probarla antes de pagar?',
          content:
            'Sí, con el plan familiar: los nuevos suscriptores tienen el primer mes gratis. Si cancelas antes de que acabe la prueba, no pagas nada.',
        },
        {
          label: '¿Cómo cancelo?',
          content:
            'En Ajustes del iPhone: toca tu nombre → Suscripciones → Svøm!. Mantienes el acceso hasta el final del periodo pagado.',
        },
      ],
    },
    cta: {
      title: '¿Listo para la próxima competición?',
      text: 'Descarga Svøm! El plan familiar incluye el primer mes gratis.',
    },
    footer: { support: 'Soporte', terms: 'Términos de uso', privacy: 'Privacidad' },
  },
}
