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
import { FormBuilder, FormGroup } from '@angular/forms';

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
    this.store.dispatch(new DeleteTodo({ id }));
  }

  completeTodo(todo: ITodo) {
    this.store.dispatch(new UpdateTodo({ todo: completedTodo(todo) }));
  }

  editTodo(todo: ITodo) {
    this.editForm = this.fb.group(todo);

    const completeSubscription = this.editForm.get('complete').valueChanges.subscribe(complete => {
      if (!complete) {
        this.editForm.patchValue({ completeDate: null });
      } else {
        this.editForm.patchValue({ completeDate: new Date() });
      }
    });
    this.dialog.editTodo(this.editForm, true).then(submit => {
      this.store.dispatch(new UpdateTodo({ todo: {...this.editForm.value}}));
      completeSubscription.unsubscribe();
      this.editForm = null;
    });
  }

  addDueDate(todo: ITodo) {
    this.store.dispatch(new UpdateTodo({ todo }));
  }

  showCreateTodoModal() {
    this.editForm = this.fb.group({
      todo: '',
      doing: '',
      description: '',
      dueDate: null,
    });
    this.dialog.editTodo(this.editForm, false).then(submit => {
      if (submit) {
        const createTodo: ICreateTodo = {
          ...this.editForm.value
        };
        this.store.dispatch(new CreateTodo({ createTodo }));
      }
      this.editForm = null;
    });
  }
}
