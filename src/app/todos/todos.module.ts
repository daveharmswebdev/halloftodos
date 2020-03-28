import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { TodosComponent } from './todos/todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './store/reducers/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/effects/todos.effects';
import { TodosService } from './services/todos.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosDialogService } from './services/modals/todos-dialog.service';
import { EditTodoComponent } from './services/modals/edit-todo/edit-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodosComponent, TodoItemComponent, EditTodoComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([TodosEffects])
  ],
  providers: [TodosService, TodosDialogService],
  entryComponents: [EditTodoComponent]
})
export class TodosModule { }
