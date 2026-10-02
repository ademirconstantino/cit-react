import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet, Scroll } from '@angular/router';
import { filter, map } from 'rxjs';
import { TopMenu } from './layout/top-menu/top-menu';
import { TopBar } from './layout/top-bar/top-bar';
import { Footer } from './layout/footer/footer';
import { ChatWidget } from './chat-widget/chat-widget';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopMenu, TopBar, Footer, ChatWidget],
  template: `
    <app-top-menu />
    <app-top-bar />
    <router-outlet />
    <app-footer />
    <!-- Outside the routed page: position:fixed breaks inside the transformed page during transitions -->
    @if (isHome()) {
      <app-chat-widget />
    }
  `,
})
export class App {
  private readonly router = inject(Router);

  protected readonly isHome = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => this.router.parseUrl(e.urlAfterRedirects).root.children['primary'] === undefined),
    ),
    { initialValue: false },
  );

  constructor() {
    // The first item of each section menu (fragment "top") goes back to the top of the page
    const scroller = inject(ViewportScroller);
    this.router.events
      .pipe(filter((e) => e instanceof Scroll && e.anchor === 'top'))
      .subscribe(() => scroller.scrollToPosition([0, 0]));
  }
}
