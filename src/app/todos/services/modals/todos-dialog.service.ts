import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { FormGroup } from '@angular/forms';

@Injectable()
export class TodosDialogService {
  constructor(private dialog: MatDialog) {}

  editTodo(todoForm: FormGroup) {
    const dialogRef = this.dialog.open(EditTodoComponent, {
      width: '33%',
      height: '500px',
      data: { todoForm }
    });

    return dialogRef.afterClosed().toPromise();
  }
}
