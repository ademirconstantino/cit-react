import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // Section links (#mission, #areas...) scroll to their anchor, also when clicked again
      withInMemoryScrolling({ anchorScrolling: 'enabled' }),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withViewTransitions({
        // Only animate a change of page, not a jump to a section of the same page
        onViewTransitionCreated: ({ transition, from, to }) => {
          if (from.firstChild?.routeConfig === to.firstChild?.routeConfig) {
            transition.skipTransition();
          }
        },
      }),
    ),
  ],
};
