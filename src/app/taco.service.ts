import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Taco } from './taco'

@Injectable()
export class TacoService {
    private tacosUrl = 'api/tacos';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getTacos(): Promise<Taco[]> {
        //return new Promise(resolve => setTimeout(() => resolve(this.tacoList),30));
        return this.http.get(this.tacosUrl).toPromise()
        .then(response => response.json().data as Taco[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {  
        console.error('An Error occurred', error);
        return Promise.reject(error.message || error);   
    }

    public update(taco: Taco): Promise<Taco>    {
        const url = `${this.tacosUrl}/${taco.id}`;
        return this.http.put(url, JSON.stringify(taco), {headers: this.headers})
        .toPromise()
        .then(() => taco)
        .catch(this.handleError);
    }

    public create(name: String): Promise<Taco> {
        return this.http.post(this.tacosUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Taco)
        .catch(this.handleError);
    }

    getTacoById(id: number): Promise<Taco> {
        const url = `${this.tacosUrl}/${id}`;
         return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Taco)
            .catch(this.handleError);
    }
}