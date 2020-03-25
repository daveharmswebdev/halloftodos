import { ITodosState, todosReducer } from 'src/app/todos/store/reducers/todos.reducer';
import * as fromHeroes from '../../heroes/store/reducers';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface AppState {
  [fromHeroes.heroesFeatureKey]: fromHeroes.HeroesState;
  todos: ITodosState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromHeroes.heroesFeatureKey]: fromHeroes.reducers,
  todos: todosReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
