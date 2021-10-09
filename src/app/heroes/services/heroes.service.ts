import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Heroe } from '../interfaces/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseEndpoint}/heroes`);
  }

  getHeroeById(id: number): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseEndpoint}/heroes/${id}`);
  }
}
