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

  proceedRecap(){
    console.log('proceedRecap from account: ' + this.fromAccount);
    console.log('proceedRecap to account: ' + this.toAccount);

    let fromAcct = this.accounts.find(account => account.id === this.fromAccount);
    console.log('proceedRecap from account: ' + fromAcct.currency);

    let toAcct = this.accounts.find(account => account.id === this.toAccount);
    console.log('proceedRecap from account: ' + toAcct.currency);

    this.router.navigate(['fxr/recap']);
  }


}
