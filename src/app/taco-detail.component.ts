import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Taco } from './taco';
import { TacoService } from './taco.service';


@Component({
    selector: 'taco-detail',
    template: `<div *ngIf="taco">
      <h2>{{taco.name}} details!</h2>
      <div><label>id: </label>{{taco.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="taco.name" placeholder="name"/>
      </div>
      <button (click)="goBack()">Back</button>
    </div>`
})

export class TacoDetailComponent implements OnInit {
  taco: Taco;

  constructor( private TacoService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) => this.TacoService.getTacoById(+params.get('id')))
    .subscribe(taco => this.taco = taco);
  }

  goBack(): void {
    this.location.back();
  }

}