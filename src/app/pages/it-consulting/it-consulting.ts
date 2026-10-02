import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lang } from '../../i18n/lang';

@Component({
  selector: 'app-it-consulting',
  imports: [RouterLink],
  templateUrl: './it-consulting.html',
})
export class ItConsulting {
  protected readonly lang = inject(Lang);
}
