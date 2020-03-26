// will be ngrx 7 and before style
import { Action } from '@ngrx/store';
import { ITodo } from '../../models/Todo';

export enum TodosActionTypes {
  FetchTodos = '[TodosPage] Fetch Todos',
  FetchTodosSuccess = '[Todos Effects] Fetch Todos Success',
  FetchTodosFailure = '[Todos Effects] Fetch Todos Failure',
  DeleteTodo = '[TodosPage] Delete Todo',
  DeleteTodoSuccess = '[TodosPage] Delete Todo Success',
  DeleteTodoFailure = '[TodosPage] Delete Todo Failure',
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

export class DeleteTodo implements Action {
  readonly type = TodosActionTypes.DeleteTodo;

  constructor(public payload: { id: number }) {}
}

export class DeleteTodoSuccess implements Action {
  readonly type = TodosActionTypes.DeleteTodoSuccess;

  constructor(public payload: { id: number }) {}
}

export class DeleteTodoFailure implements Action {
  readonly type = TodosActionTypes.DeleteTodoFailure;

  constructor(public payload: { error: any }) {}
}

export type TodosAction =
  | FetchTodos
  | FetchTodosSuccess
  | FetchTodosFailure
  | DeleteTodo
  | DeleteTodoSuccess
  | DeleteTodoFailure;
