import { Component, Input } from '@angular/core';

import { TodoService } from '../todo.service';
import { Todo }        from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class TodoListComponent{
  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) { }

  addTodo(){
    if (!this.newTodo.title.trim()) {
            return;
        }
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  get todos(){
     return this.todoService.getAllTodos();
  }
}
