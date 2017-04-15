import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

import { HeroesModule }            from './heroes/heroes.module';
import { FxrModule }            from './fxr/fxr.module';
import { SamplesModule }            from './samples/samples.module';

import { PageNotFoundComponent }   from './not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    FxrModule,
    SamplesModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
