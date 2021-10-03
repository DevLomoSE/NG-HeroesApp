import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  URL: string = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) { }

  getHeroes(){
    return this.http.get(`${this.URL}/heroes`);
  }
}
