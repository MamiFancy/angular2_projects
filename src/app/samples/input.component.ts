import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SamplesService }  from './samples.service';

@Component({
  template: `
    <h2>Sample Input</h2>
  `
})
export class InputComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SamplesService
  ) {}

  ngOnInit() {

  }

}
