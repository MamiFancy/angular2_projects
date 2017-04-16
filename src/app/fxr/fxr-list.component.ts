// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FxrRatesTableComponent } from './fxr-rates-table.component';
import { FxrService }  from './fxr.service';

@Component({
  templateUrl: './fxr-list.component.html'
})

export class FxrListComponent implements OnInit {

  content:any;
  rates:any;
  selectedRate: any;
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

  onSelectedRate(rate:any) {
    this.selectedRate = rate;
    console.log('onSelectedRate: ' + this.selectedRate.targetCurrencyCode);
  }

  buySellRate() {
    console.log('buy sell: ');
    this.router.navigate(['fxr/input']);
  }

}
