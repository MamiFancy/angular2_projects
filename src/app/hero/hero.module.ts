import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './list/hero-list.component';
import { HeroDetailComponent }  from './detail/hero-detail.component';
import { HeroService }          from './hero.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ]
})

export class HeroModule  {

}
