import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TodoRoutes } from './todo/todo.routes';
import { HeroRoutes } from './hero/hero.routes';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  ...HeroRoutes,
  ...TodoRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
