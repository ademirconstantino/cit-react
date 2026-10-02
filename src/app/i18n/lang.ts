import { Injectable, signal } from '@angular/core';

import data_en from '../../../public/json/cit.en.json';
import data_es from '../../../public/json/cit.es.json';
import data_pt from '../../../public/json/cit.pt.json';
import data_it from '../../../public/json/cit.it.json';
import data_fr from '../../../public/json/cit.fr.json';
import data_de from '../../../public/json/cit.de.json';
import data_jp from '../../../public/json/cit.jp.json';
import data_ch from '../../../public/json/cit.ch.json';
import data_em from '../../../public/json/cit.em.json';

const DATA: Record<string, unknown> = {
  en: data_en,
  es: data_es,
  pt: data_pt,
  it: data_it,
  fr: data_fr,
  de: data_de,
  jp: data_jp,
  ch: data_ch,
  em: data_em,
};

// Browser language (ISO 639-1) -> site language code
const BROWSER_TO_SITE_LANG: Record<string, string> = {
  en: 'en',
  es: 'es',
  it: 'it',
  pt: 'pt',
  fr: 'fr',
  de: 'de',
  zh: 'ch',
  ja: 'jp',
  ar: 'em',
};

// Only a language the user picked by hand is stored, so everyone else keeps following
// the browser/OS language. (The old "langSelected" key was written on every visit.)
const STORAGE_KEY = 'langChosen';

function detectBrowserLang(): string {
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of preferred) {
    const lang = BROWSER_TO_SITE_LANG[tag?.toLowerCase().split('-')[0]];
    if (lang) return lang;
  }
  return 'en';
}

function readStoredLang(): string | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && Object.values(BROWSER_TO_SITE_LANG).includes(stored) ? stored : null;
  } catch {
    return null;
  }
}

// Reads a dotted key ("menu.home") from the language file; null when it is missing
function getValue(path: string, data: unknown): string | null {
  const value = path
    .split('.')
    .reduce<any>((obj, key) => (obj && obj[key] ? obj[key] : null), data);
  return value ?? null;
}

@Injectable({ providedIn: 'root' })
export class Lang {
  readonly selected = signal(readStoredLang() ?? detectBrowserLang());

  constructor() {
    try {
      localStorage.removeItem('langSelected');
    } catch {
      // storage unavailable
    }
  }

  select(lang: string) {
    this.selected.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // storage unavailable (private mode): the choice lasts for this visit only
    }
  }

  /** Translation of a key in the selected language. Reading it in a template re-renders on language change. */
  t(key: string): string | null {
    return getValue(key, DATA[this.selected()] ?? data_en);
  }
}
