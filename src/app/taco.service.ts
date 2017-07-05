import { Injectable } from '@angular/core';
import { Taco } from './taco'

@Injectable()
export class TacoService {
    tacoList = [
                { id: 1, name: 'Spicy' },
                { id: 2, name: 'Sweet' },
                { id: 3, name: 'Bacon' },
                { id: 5, name: 'Black' },
                { id: 19, name: 'Rice' },
                { id: 12, name: 'Donut' },
                { id: 17, name: 'Coffee' },
                { id: 11, name: 'Zero' }
            ];

    getTacos(): Promise<Taco[]> {
        return new Promise(resolve => setTimeout(() => resolve(this.tacoList),30));
    }

    getTacoById(id: number): Promise<Taco> {
        return this.getTacos().then(t => t.find(t => t.id === id));
    }
}