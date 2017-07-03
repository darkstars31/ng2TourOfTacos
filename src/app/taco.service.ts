import { Injectable } from '@angular/core';
import { Taco } from './taco'

@Injectable()
export class TacoService {
    getTacos(): any {
        return [
                { id: 1, name: 'Spicy' },
                { id: 2, name: 'Sweet' },
                { id: 3, name: 'Bacon' },
                { id: 5, name: 'Black' },
                { id: 19, name: 'Rice' },
                { id: 12, name: 'Donut' },
                { id: 17, name: 'Coffee' },
                { id: 11, name: 'Zero' }
            ];
    }
}