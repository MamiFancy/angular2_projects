import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FxrService }  from './fxr.service';

@Component({
  selector:'fxr-confirm',
  templateUrl: './fxr-confirm.component.html'
})

export class FxrConfirmComponent implements OnInit {
  content:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FxrService
  ) {}

  ngOnInit() {
    this.service.getContent().subscribe(content1 => this.content = content1);
  }

  proceedRecap(){
    console.log('proceed confirm: ');
    this.router.navigate(['fxr/confirm']);
  }
}
