import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SamplesService }  from './samples.service';

@Component({
  template: `
    <h2 >Sample Recap</h2>

  `
})
export class RecapComponent implements OnInit {

  content:any;

  constructor(
    private service: SamplesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

  }


}
