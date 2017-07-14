import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TacoService } from './taco.service';
import { Taco } from './taco';

@Component({
  selector: 'my-tacos',
  templateUrl: './taco.component.html',
  styleUrls: ['./taco.component.css']
})

export class TacoComponent implements OnInit {
  tacos: Taco[];
  selectedTaco: Taco;

  constructor(private tacoService: TacoService, private router: Router) { }

  ngOnInit():void {
    this.getTacos();
  }

  getTacos(): void {
    this.tacoService.getTacos().then(tacoList => this.tacos = tacoList);
  }

  onSelect(taco: Taco): void {
    this.selectedTaco = taco;
  }

  gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedTaco.id]);
  }
}