import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lang } from '../../i18n/lang';
import { CopilotIcon } from '../../copilot-icon/copilot-icon';

const CARDS = [
  { path: '/mobile-apps', color: '#0969da', title: 'home.desc_mobile_apps', body: 'home.desc_mobile_apps_body' },
  { path: '/it-consulting', color: '#e8590c', title: 'home.desc_support', body: 'home.desc_support_body' },
  { path: '/cloud-solutions', color: '#1a7f37', title: 'home.desc_support_a', body: 'home.desc_support_abody' },
  { path: '/web-development', color: '#8250df', title: 'home.desc_support_b', body: 'home.desc_support_bbody' },
];

@Component({
  selector: 'app-home',
  imports: [RouterLink, CopilotIcon],
  templateUrl: './home.html',
})
export class Home {
  protected readonly lang = inject(Lang);
  protected readonly cards = CARDS;
}
