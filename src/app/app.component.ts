import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Angular Modules</h1>
    <nav>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/fxr" routerLinkActive="active">Fxr</a>
      <a routerLink="/fxr/input" routerLinkActive="active">Fxr Detail</a>

      <a routerLink="/samples/input" routerLinkActive="active">Samples input</a>
      <a routerLink="/samples/recap" routerLinkActive="active">Samples recap</a>
      <a routerLink="/samples/confirm" routerLinkActive="active">Samples confirm</a>

    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
}
