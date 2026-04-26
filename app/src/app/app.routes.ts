import { Routes } from '@angular/router';
import { Confirmed } from '../components/pages/confirmed/confirmed';
import { Home } from '../components/pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'confirmed', component: Confirmed },
];
