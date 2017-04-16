import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { FxrService }  from './fxr.service';

@Component({
  selector: 'fx-rates-table',
  template: `
    <table>
      <thead>
        <tr>
          <td>

          </td>
          <td>
            Currency
          </td>
          <td>
            Code
          </td>
          <td>
            Buy**
          </td>
          <td>
            Sell**
          </td>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let rate of rates">
          <td>
            <input type="radio" name="selectedCurrencyCode" value="{{ rate.targetCurrencyCode }}">
          </td>
          <td>
            {{ rate.targetCurrencyDesc }}
          </td>
          <td>
            {{ rate.targetCurrencyCode }}
          </td>
          <td>
            {{ rate.buyRate }}
          </td>
          <td>
            {{ rate.sellRate }}
          </td>
        </tr>
      </tbody>
    </table>
  `
})

export class FxrRatesTableComponent implements OnInit {

  @Input() rates:any;

  ngOnInit() {

  }


}
