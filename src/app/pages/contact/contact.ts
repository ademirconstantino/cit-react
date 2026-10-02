import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lang } from '../../i18n/lang';
import { EMAIL, PHONES, telHref } from '../../contact-info';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly lang = inject(Lang);
  protected readonly email = EMAIL;
  protected readonly phones = PHONES;
  protected readonly telHref = telHref;
}
