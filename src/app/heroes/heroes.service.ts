import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHero } from './models/Hero';

@Injectable()
export class HeroesService {
  private baseUrl = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<IHero[]>(this.baseUrl);
  }
}
