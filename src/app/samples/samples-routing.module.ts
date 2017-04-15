import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputComponent }    from './input.component';
import { RecapComponent }  from './recap.component';
import { ConfirmComponent }  from './confirm.component';

const samplesRoutes: Routes = [
  { path: 'samples/input',  component: InputComponent },
  { path: 'samples/recap', component: RecapComponent },
  { path: 'samples/confirm', component: ConfirmComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(samplesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SamplesRoutingModule { }
