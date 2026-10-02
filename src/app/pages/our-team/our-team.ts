import { Component, inject } from '@angular/core';
import { Lang } from '../../i18n/lang';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.html',
})
export class OurTeam {
  protected readonly lang = inject(Lang);
}
