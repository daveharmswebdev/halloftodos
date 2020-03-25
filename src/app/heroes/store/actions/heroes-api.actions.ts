import { createAction, props, union } from '@ngrx/store';
import { IHero } from '../../models/Hero';

export const loadHeroesSuccess = createAction(
  '[Heroes/Api] Load Heroes Success',
  props<{ heroes: IHero[] }>()
);

export const loadHeroesFailure = createAction(
  '[Heroes/Api] Load Heroes Failure',
  props<{ errorMsg: any }>()
);

const all = union({
  loadHeroesSuccess,
  loadHeroesFailure,
});

export type HeroesApiActionsUnion = typeof all;
