// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FxrRatesTableComponent } from './fxr-rates-table.component';
import { FxrService }  from './fxr.service';

@Component({
  template: `
    <div *ngIf="content">
      <h2>{{content.title}}</h2>
      <hr/>
      <h3>{{content.subtitle}}</h3>
      <span>{{content.lblDisclaimer1}}</span>

      <fx-rates-table [rates] = "rates"></fx-rates-table>

      <br/><br/>
      {{content.lblBottomDisclaimer1}}
      <br/><br/>
      {{content.lblBottomDisclaimer2}}
      <br/><br/>
      <button (click)="buySellRate()">{{content.lblBtnSubmit}}</button>


    </div>
  `
})

export class FxrListComponent implements OnInit {

  content:any;
  private selectedId: number;

  rates:any;

  constructor(
    private service: FxrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.getContent().subscribe(content1 => this.content = content1);
    this.service.getFXRates().subscribe(data => {
      this.rates = data.rates;
      console.log('rates = ' + this.rates);
    });
  }

  buySellRate() {
    console.log('buy sell rate...');
  }

}
