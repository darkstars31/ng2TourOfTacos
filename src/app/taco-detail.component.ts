import { Component, Input } from '@angular/core';
import { Taco } from './taco'

@Component({
    selector: 'taco-detail',
    template: `<div *ngIf="taco">
      <h2>{{taco.name}} details!</h2>
      <div><label>id: </label>{{taco.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="taco.name" placeholder="name"/>
      </div>
    </div>`
})

export class TacoDetailComponent {
   @Input() taco: Taco;
}