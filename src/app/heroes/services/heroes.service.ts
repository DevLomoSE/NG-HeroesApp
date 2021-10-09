import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Heroe } from '../interfaces/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  URL: string = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.URL}/heroes`);
  }
}
