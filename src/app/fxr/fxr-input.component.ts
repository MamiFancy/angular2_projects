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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FxrService
  ) {}

  ngOnInit() {
    this.service.getContent().subscribe(content1 => this.content = content1);
  }

  proceedRecap(){
    console.log('proceedRecap: ');
    this.router.navigate(['fxr/recap']);
  }
}
