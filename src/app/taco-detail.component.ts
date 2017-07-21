import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';


import { Taco } from './taco';
import { TacoService } from './taco.service';


@Component({
    selector: 'taco-detail',
    templateUrl: './taco-detail.component.html',
    styleUrls: ["./taco-detail.component.css"]
})

export class TacoDetailComponent implements OnInit {
  taco: Taco;

  constructor(  
    private TacoService: TacoService, 
    private route: ActivatedRoute, 
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.TacoService.getTacoById(+params.get('id')))
    .subscribe(taco => this.taco = taco);
    
  }

  save(): void {
    this.TacoService.update(this.taco)
    .then(() => this.goBack());
  } 

  goBack(): void {
    this.location.back();
  }

}