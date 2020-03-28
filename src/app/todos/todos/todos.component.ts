import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  FetchTodos,
  DeleteTodo,
  UpdateTodo,
  CreateTodo,
} from '../store/actions/todos.actions';
import { Observable } from 'rxjs';
import { ITodo, ICreateTodo } from '../models/Todo';
import { selectTodosAll } from '../store/selectors/todos.selector';
import { AppState } from 'src/app/store/reducers';
import { completedTodo } from '../helpers/completedTodo';
import { TodosDialogService } from '../services/modals/todos-dialog.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { todoAdapter } from '../store/reducers/todos.reducer';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos$: Observable<ITodo[]>;
  public editForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private dialog: TodosDialogService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.todos$ = this.store.pipe(select(selectTodosAll));

    this.store.dispatch(new FetchTodos());
  }

  deleteTodo({ id }) {
    console.log('deleting id', id);
    this.store.dispatch(new DeleteTodo({ id }));
  }

  completeTodo(todo: ITodo) {
    this.store.dispatch(new UpdateTodo({ todo: completedTodo(todo) }));
  }

  showCreateTodoModal() {
    this.editForm = this.fb.group({
      todo: '',
      doing: '',
      description: '',
      dueDate: null,
    });
    this.dialog.editTodo(this.editForm).then(submit => {
      if (submit) {
        const { todo, doing, description, dueDate } = this.editForm.value;
        const createTodo: ICreateTodo = {
          todo,
          doing,
          description,
          dueDate,
        };
        this.store.dispatch(new CreateTodo({ createTodo }));
      } else {
        console.log('cancel');
      }
      this.editForm = null;
    });
  }
}
