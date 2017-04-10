import { Route } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './list/hero-list.component';
import { HeroDetailComponent }  from './detail/hero-detail.component';


export const HeroRoutes: Route[] = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
]
