import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { HeroesService } from '../../heroes.service';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { loadHeroesSuccess } from '../actions/heroes-api.actions';

@Injectable()
export class HeroesEffects {
  loadHeroes$ = createEffect(() => this.actions$.pipe(
    ofType('[Heroes Page] Load'),
    mergeMap(() => this.hereosService.getHeroes().pipe(
      map(heroes => (loadHeroesSuccess({ heroes }))),
      catchError(() => EMPTY)
    ))
  ));

  constructor(
    private actions$: Actions,
    private hereosService: HeroesService
  ) {}
}
