import { Component } from '@angular/core';
import { TacoService } from './taco.service';

export class Taco {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  providers: [TacoService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private tacoService: TacoService) { }

  tacos = this.tacoService.getTacos();
  selectedTaco: Taco;
  title = 'Tour of Tacos';
  taco : Taco = {
    id: 1,
    name: 'Super Spicy'
  };

  onSelect(taco: Taco): void {
    this.selectedTaco = taco;
  }
}