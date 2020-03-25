import { ITodo } from '../../models/Todo';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as fromTodos from '../actions/todos.actions';

export interface ITodoEntityState extends EntityState<ITodo> {
  selectedTodoId: number | null;
}

export interface ITodosState {
  loading: boolean;
  loaded: boolean;
  todos: ITodoEntityState;
  error: string;
}

export const todoAdapter: EntityAdapter<ITodo> = createEntityAdapter<ITodo>();

export const intitialTodosState: ITodosState = {
  loading: false,
  loaded: false,
  todos: todoAdapter.getInitialState({ selectedTodoId: null }),
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
        todos: todoAdapter.setAll(action.payload.todos, state.todos),
      };
    case fromTodos.TodosActionTypes.FetchTodosFailure:
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    default:
      return state;
  }
}

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = todoAdapter.getSelectors();

export const getLoading = (state: ITodosState) => state.loading;
export const getLoaded = (state: ITodosState) => state.loaded;
export const getTodos = (state: ITodosState) => state.todos;

export const getTodoIds = selectIds;
export const getTodoEntities = selectEntities;
export const getTodoAll = selectAll;
export const getTodoTotal = selectTotal;

export const getError = (state: ITodosState) => state.error;
