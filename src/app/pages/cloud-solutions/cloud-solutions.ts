import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lang } from '../../i18n/lang';

@Component({
  selector: 'app-cloud-solutions',
  imports: [RouterLink],
  templateUrl: './cloud-solutions.html',
})
export class CloudSolutions {
  protected readonly lang = inject(Lang);
}
