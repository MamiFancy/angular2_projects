import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { TodoService } from '../todo.service';
import { Todo }        from '../todo';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class TodoItemComponent{
  @Input() todo: Todo;

  constructor(private todoService: TodoService, private router: Router){}

  gotoDetail(todo: Todo){
    this.router.navigate(['/todo/detail', todo.id]);
  }

  toggleTodoComplete(todo: Todo){
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo: Todo){
    this.todoService.deleteTodoById(todo.id);
  }
}
