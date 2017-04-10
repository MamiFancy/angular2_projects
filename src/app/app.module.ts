import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }     from '@angular/http';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './hero/dashboard/dashboard.component';
import { HeroesComponent }      from './hero/list/hero-list.component';
import { HeroDetailComponent }  from './hero/detail/hero-detail.component';
import { HeroService }          from './hero/hero.service';

import { HeroModule } from './hero/hero.module';
import { TodoModule } from './todo/todo.module';

import { AppRoutingModule }     from './app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    TodoModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
