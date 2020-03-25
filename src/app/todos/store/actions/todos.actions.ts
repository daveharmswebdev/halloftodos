// will be ngrx 7 and before style
import { Action } from '@ngrx/store';
import { IHero } from 'src/app/heroes/models/Hero';

export enum TodosActionTypes {
  FetchTodos = '[TodosPage] Fetch Todos',
  FetchTodosSuccess = '[TodosPage] Fetch Todos Success',
  FetchTodosFailure = '[TodosPage] Fetch Todos Failure',
}

export class FetchTodos implements Action {
  readonly type = TodosActionTypes.FetchTodos;
}

export class FetchTodosSuccess implements Action {
  readonly type = TodosActionTypes.FetchTodosSuccess;

  constructor(public payload: { heroes: IHero[] }) {}
}

export class FetchTodosFailure implements Action {
  readonly type = TodosActionTypes.FetchTodosFailure;

  constructor(public payload: { error: string }) {}
}

export type TodosAction = FetchTodos | FetchTodosSuccess | FetchTodosFailure;
