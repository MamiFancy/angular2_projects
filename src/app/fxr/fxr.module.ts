import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { FxrListComponent }    from './fxr-list.component';
import { FxrDetailComponent }  from './fxr-detail.component';
import { FxrRatesTableComponent } from './fxr-rates-table.component';

import { FxrService } from './fxr.service';

import { FxrRoutingModule } from './fxr-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FxrRoutingModule
  ],
  declarations: [
    FxrListComponent,
    FxrDetailComponent,
    FxrRatesTableComponent
  ],
  providers: [ FxrService ]
})
export class FxrModule {}
