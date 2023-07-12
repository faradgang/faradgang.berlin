export const ui = {
  en: {
    name: "English",
    "nav.back": "Back",
    "nav.help": "Help",
    "nav.imprint": "Imprint",
    "nav.privacy-policy": "Privacy Policy",
    lastUpdate: "Last update",
  },
  de: {
    name: "Deutsch",
    "nav.back": "Zurück",
    "nav.help": "Helfen",
    "nav.imprint": "Impressum",
    "nav.privacy-policy": "Datenschutzerklärung",
    lastUpdate: "Stand",
  },
} as const;

export type Language = keyof typeof ui;
export const languages = Object.keys(ui) as Array<Language>;

export const defaultLang = "de" satisfies Language;
