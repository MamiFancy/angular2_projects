import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FxrService }  from './fxr.service';

@Component({
  selector:'fxr-input',
  templateUrl: './fxr-input.component.html'
})

export class FxrInputComponent implements OnInit {
  content:any;
  fromAccount:any = "-1";
  toAccount:any = "-1";
  accounts:Array<any>;
  srcAmount:string;
  destAmount:string;
  amountSource:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FxrService
  ) {}

  ngOnInit() {
    this.service.getContent().subscribe(content1 => this.content = content1);
    this.service.getAccounts().subscribe(data => {
      this.accounts = data.accounts;
      console.log('accounts = ' + this.accounts);
    });
  }

  getCurrency(id:any): string{
    let acct = this.accounts.find(account => account.id === id);
    if(acct == null){
      return null;
    }
    return acct.currency;
  }

  proceedRecap(){
    console.log('proceedRecap from account: ' + this.fromAccount);
    console.log('proceedRecap to account: ' + this.toAccount);

    let fromAcctCurrency = this.getCurrency(this.fromAccount);
    console.log('proceedRecap from account: ' + fromAcctCurrency);

    let toAcctCurrency = this.getCurrency(this.toAccount);
    console.log('proceedRecap from account: ' + toAcctCurrency);

    console.log("amountSource - " + this.amountSource);
    console.log("amountSource - " + this.amountSource);
    let amount = this.amountSource === "src"? this.srcAmount : this.destAmount;

    let inputData = {
      fromAcctCurrency: fromAcctCurrency,
      toAcctCurrency: toAcctCurrency,
      amountSource: this.amountSource,
      amount: amount
    }

    console.log("input data = " + JSON.stringify(inputData));

    this.router.navigate(['fxr/recap']);
  }


}
