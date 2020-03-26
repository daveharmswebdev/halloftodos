import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHero } from './models/Hero';
import { catchError } from 'rxjs/operators';
import { handleError } from '../shared/helpers/HandlerError';

@Injectable()
export class HeroesService {
  private baseUrl = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<IHero[]>(this.baseUrl).pipe(
      catchError(handleError)
    );
  }
}
