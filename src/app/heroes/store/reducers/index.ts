import * as fromHeroes from './heroes.reducer';
import { Action, combineReducers } from '@ngrx/store';

export interface HeroesState {
  [fromHeroes.heroesFeatureKey]: fromHeroes.State;
}

export const heroesFeatureKey = 'heroes';

export function reducers(state: HeroesState | undefined, action: Action) {
  return combineReducers({
    [fromHeroes.heroesFeatureKey]: fromHeroes.reducer
  })(state, action);
}

