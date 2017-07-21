import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const tacos = [
                { id: 0, name: 'zero spice'},
                { id: 1, name: 'Spicy' },
                { id: 2, name: 'Sweet' },
                { id: 3, name: 'Bacon' },
                { id: 5, name: 'Black' },
                { id: 19, name: 'Rice' },
                { id: 12, name: 'Donut' },
                { id: 17, name: 'Coffee' },
                { id: 11, name: 'Zero' }
        ];
            return {tacos};
    }
}