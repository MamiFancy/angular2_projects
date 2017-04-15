import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FxrListComponent }    from './fxr-list.component';
import { FxrDetailComponent }  from './fxr-detail.component';

const fxrRoutes: Routes = [
  { path: 'fxr',  component: FxrListComponent },
  { path: 'fxr/:id', component: FxrDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(fxrRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FxrRoutingModule { }
