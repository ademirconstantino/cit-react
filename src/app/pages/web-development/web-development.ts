import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lang } from '../../i18n/lang';

@Component({
  selector: 'app-web-development',
  imports: [RouterLink],
  templateUrl: './web-development.html',
})
export class WebDevelopment {
  protected readonly lang = inject(Lang);
}
