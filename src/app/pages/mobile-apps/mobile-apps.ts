import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lang } from '../../i18n/lang';

@Component({
  selector: 'app-mobile-apps',
  imports: [RouterLink],
  templateUrl: './mobile-apps.html',
})
export class MobileApps {
  protected readonly lang = inject(Lang);
}
