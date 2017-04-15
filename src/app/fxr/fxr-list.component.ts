// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FxrService }  from './fxr.service';

@Component({
  template: `
    <h2 *ngIf="content">{{content.title}}</h2>

  `
})
export class FxrListComponent implements OnInit {

  content:any;
  private selectedId: number;

  constructor(
    private service: FxrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.getContent().subscribe(content1 => this.content = content1);
  }


}
