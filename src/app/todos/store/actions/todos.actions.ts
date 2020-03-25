// will be ngrx 7 and before style
import { Action } from '@ngrx/store';
import { ITodo } from '../../models/Todo';

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

  constructor(public payload: { todos: ITodo[] }) {}
}

export class FetchTodosFailure implements Action {
  readonly type = TodosActionTypes.FetchTodosFailure;

  constructor(public payload: { error: any }) {}
}

export type TodosAction = FetchTodos | FetchTodosSuccess | FetchTodosFailure;
