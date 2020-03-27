// will be ngrx 7 and before style
import { Action } from '@ngrx/store';
import { ITodo } from '../../models/Todo';
import { Update } from '@ngrx/entity';

export enum TodosActionTypes {
  FetchTodos = '[TodosPage] Fetch Todos',
  FetchTodosSuccess = '[Todos Effects] Fetch Todos Success',
  FetchTodosFailure = '[Todos Effects] Fetch Todos Failure',
  DeleteTodo = '[TodosPage] Delete Todo',
  DeleteTodoSuccess = '[TodosPage] Delete Todo Success',
  DeleteTodoFailure = '[TodosPage] Delete Todo Failure',
  UpdateTodo = '[Todos Page] Update Todo',
  UpdateTodoSuccess = '[Todos Page] Update Todo Success',
  UpdateTodoFailure = '[Todos Page] Update Todo Failure',
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

export class UpdateTodo implements Action {
  readonly type = TodosActionTypes.UpdateTodo;

  constructor(public payload: { todo: ITodo }) {}
}

export class UpdateTodoSuccess implements Action {
  readonly type = TodosActionTypes.UpdateTodoSuccess;

  constructor(public payload: { update: Update<ITodo>}) {}
}

export class UpdateTodoFailure implements Action {
  readonly type = TodosActionTypes.UpdateTodoFailure;

  constructor(public payload: { error: any }) {}
}

export type TodosAction =
  | FetchTodos
  | FetchTodosSuccess
  | FetchTodosFailure
  | DeleteTodo
  | DeleteTodoSuccess
  | DeleteTodoFailure
  | UpdateTodo
  | UpdateTodoSuccess
  | UpdateTodoFailure;
