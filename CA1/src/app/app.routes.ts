import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Details } from './components/details/details';

const homeRoute = { path: '', component: Home };
const aboutRoute = { path: 'about', component: About };
const detailsRoute = { path: 'movie/:id', component: Details };

export const routes: Routes = [homeRoute, aboutRoute, detailsRoute];
