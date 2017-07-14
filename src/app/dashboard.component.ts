 import { Component, OnInit } from '@angular/core';

 import { Taco } from './taco';
 import { TacoService } from './taco.service';

 @Component({
     selector: 'my-dashboard',
     templateUrl:  './dashboard.component.html',
     styleUrls: ['./dashboard.component.css']
 })

 export class DashboardComponent implements OnInit {

    tacos: Taco[] = [];
    constructor(private TacoService: TacoService) { }

    ngOnInit(): void {
        this.TacoService.getTacos().then(tacoList => this.tacos = tacoList.slice(1,5));
    }

 }