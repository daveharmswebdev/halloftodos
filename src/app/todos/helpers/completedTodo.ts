import { ITodo } from '../models/Todo';

export const completedTodo = (todo: ITodo) =>
  !todo.complete
    ? {
        ...todo,
        complete: true,
        completeDate: new Date(),
      }
    : {
        ...todo,
        complete: false,
        completeDate: null,
      };
