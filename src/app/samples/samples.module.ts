import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { InputComponent }    from './input.component';
import { RecapComponent }  from './recap.component';
import { ConfirmComponent }  from './confirm.component';

import { SamplesService } from './samples.service';

import { SamplesRoutingModule } from './samples-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SamplesRoutingModule
  ],
  declarations: [
    InputComponent,
    RecapComponent,
    ConfirmComponent
  ],
  providers: [ SamplesService ]
})
export class SamplesModule {}
