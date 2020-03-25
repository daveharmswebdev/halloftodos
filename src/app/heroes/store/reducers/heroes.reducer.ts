import { IHero } from '../../models/Hero';
import { createReducer, on } from '@ngrx/store';

import { HeroesActions, HeroesApiActions } from '../actions';

export const heroesFeatureKey = 'heroes';

export interface State {
  loaded: boolean;
  loading: boolean;
  heroes: IHero[];
  error: string;
}

const initialState: State = {
  loaded: false,
  loading: false,
  heroes: [],
  error: '',
};

export const reducer = createReducer(
  initialState,
  on(HeroesActions.loadHeroes, state => ({
    ...state,
    loading: true
  })),
  on(HeroesApiActions.loadHeroesSuccess, (state, { heroes }) => ({
    ...state,
    loading: false,
    loaded: true,
    heroes
  })),
  on(HeroesApiActions.loadHeroesFailure, (state, { errorMsg }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: errorMsg
  }))
);

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const getHeroes = (state: State) => state.heroes;
