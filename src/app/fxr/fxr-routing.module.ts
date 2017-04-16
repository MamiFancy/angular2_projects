import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FxrListComponent }    from './fxr-list.component';
import { FxrDetailComponent }  from './fxr-detail.component';
import { FxrInputComponent }  from './fxr-input.component';
import { FxrRecapComponent }  from './fxr-recap.component';
import { FxrConfirmComponent }  from './fxr-confirm.component';

const fxrRoutes: Routes = [
  { path: 'fxr',  component: FxrListComponent },
  { path: 'fxr/input', component: FxrInputComponent },
  { path: 'fxr/recap', component: FxrRecapComponent },
  { path: 'fxr/confirm', component: FxrConfirmComponent }
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
