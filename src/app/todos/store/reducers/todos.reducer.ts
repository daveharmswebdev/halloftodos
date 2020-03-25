import { ITodo } from '../../models/Todo';
import * as fromTodos from '../actions/todos.actions';

export interface ITodosState {
  loading: boolean;
  loaded: boolean;
  todos: ITodo[];
  error: string;
}

export const intitialTodosState: ITodosState = {
  loading: false,
  loaded: false,
  todos: [],
  error: '',
};

export function todosReducer(
  state = intitialTodosState,
  action: fromTodos.TodosAction
): ITodosState {
  switch (action.type) {
    case fromTodos.TodosActionTypes.FetchTodos:
      return {
        ...state,
        loading: true,
      };
    case fromTodos.TodosActionTypes.FetchTodosSuccess:
      return {
        ...state,
        loading: false,
        loaded: true,
        todos: action.payload.todos
      };
    case fromTodos.TodosActionTypes.FetchTodosFailure:
      return {
        ...state,
        loaded: false,
        loading: false
      };
    default:
      return state;
  }
}

export const getLoading = (state: ITodosState) => state.loading;
export const getLoaded = (state: ITodosState) => state.loaded;
export const getTodos = (state: ITodosState) => state.todos;
export const getError = (state: ITodosState) => state.error;
