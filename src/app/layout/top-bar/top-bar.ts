import { Component, computed, inject } from '@angular/core';
import { Lang } from '../../i18n/lang';

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '/img/en.png' },
  { code: 'es', name: 'Español', flag: '/img/es.png' },
  { code: 'it', name: 'Italiano', flag: '/img/it.png' },
  { code: 'pt', name: 'Português', flag: '/img/br.png' },
  { code: 'fr', name: 'Français', flag: '/img/fr.png' },
  { code: 'de', name: 'Deutsch', flag: '/img/de.png' },
  { code: 'ch', name: '中国人', flag: '/img/ch.png' },
  { code: 'jp', name: '日本語', flag: '/img/jp.png' },
  { code: 'em', name: 'Earabiun', flag: '/img/em.png' },
];

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.html',
})
export class TopBar {
  protected readonly lang = inject(Lang);
  protected readonly languages = LANGUAGES;

  protected readonly selectedLanguage = computed(
    () =>
      LANGUAGES.find((language) => language.code === this.lang.selected()) ??
      LANGUAGES.find((language) => language.code === 'en')!,
  );

  protected onSelect(event: Event) {
    this.lang.select((event.target as HTMLSelectElement).value);
  }
}
