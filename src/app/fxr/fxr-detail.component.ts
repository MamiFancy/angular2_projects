import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FxrService }  from './fxr.service';

@Component({
  template: `
    <h2>Fxr Detail</h2>
  `
})
export class FxrDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FxrService
  ) {}

  ngOnInit() {

  }

}
