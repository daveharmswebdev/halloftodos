import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../models/Todo';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: ITodo;
  @Output() deleteTodo: EventEmitter<{id: string}> = new EventEmitter();
  @Output() completeTodo: EventEmitter<ITodo> = new EventEmitter();
  @Output() editTodo: EventEmitter<ITodo> = new EventEmitter();
  @Output() addDueDate: EventEmitter<ITodo> = new EventEmitter();

  showDueDatePicker = false;
  date = new FormControl();

  delete() {
    this.deleteTodo.emit({id: this.todo.id});
  }

  complete() {
    this.completeTodo.emit(this.todo);
  }

  edit() {
    this.editTodo.emit(this.todo);
  }

  emitDueDate() {
    const updateTodo: ITodo = {
      ...this.todo,
      dueDate: this.date.value
    };
    this.addDueDate.emit(updateTodo);
    this.showDueDatePicker = false;
  }

}
