import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { OurTeam } from './pages/our-team/our-team';
import { Contact } from './pages/contact/contact';
import { MobileApps } from './pages/mobile-apps/mobile-apps';
import { ItConsulting } from './pages/it-consulting/it-consulting';
import { WebDevelopment } from './pages/web-development/web-development';
import { CloudSolutions } from './pages/cloud-solutions/cloud-solutions';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'our-team', component: OurTeam },
  { path: 'contact', component: Contact },
  { path: 'mobile-apps', component: MobileApps },
  { path: 'it-consulting', component: ItConsulting },
  { path: 'web-development', component: WebDevelopment },
  { path: 'cloud-solutions', component: CloudSolutions },
];
