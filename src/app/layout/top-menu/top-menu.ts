import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Lang } from '../../i18n/lang';

@Component({
  selector: 'app-top-menu',
  imports: [RouterLink],
  templateUrl: './top-menu.html',
})
export class TopMenu {
  protected readonly lang = inject(Lang);
  protected readonly menuOpen = signal(false);

  constructor() {
    // Close the mobile menu on every navigation (also re-clicks of the same page)
    inject(Router)
      .events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.menuOpen.set(false));
  }

  protected toggleMenu(event: Event) {
    event.preventDefault();
    this.menuOpen.update((open) => !open);
  }
}
