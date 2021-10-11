import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Heroe } from '../interfaces/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseEndpoint = environment.apiEndpoint;
  private limit = environment.searchLimit;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseEndpoint}/heroes`);
  }

  getHeroeById(id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseEndpoint}/heroes/${id}`);
  }

  getSugerencias( termino: string): Observable<Heroe[]>{
    let params = new HttpParams()
                      .set('q', termino)
                      .set('_limit', this.limit);

    return this.http.get<Heroe[]>(`${this.baseEndpoint}/heroes`, { params });
  }

  saveHeroe( heroe: Heroe){
    return this.http.post<Heroe>(`${this.baseEndpoint}/heroes`, heroe);
  }

  updateHeroe( heroe: Heroe){
    return this.http.put<Heroe>(`${this.baseEndpoint}/heroes/${heroe.id}`, heroe);
  }
}
