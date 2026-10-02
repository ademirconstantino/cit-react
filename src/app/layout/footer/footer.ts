import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lang } from '../../i18n/lang';
import { PHONES, telHref } from '../../contact-info';

const CNPJ = {
  number: '11.809.343/0001-18',
  url: 'https://www.jusbrasil.com.br/nome/ademir-constantino-filho/cnpj-CvuNXRGGiVx',
};

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly lang = inject(Lang);
  protected readonly phones = PHONES;
  protected readonly telHref = telHref;
  protected readonly cnpj = CNPJ;
}
