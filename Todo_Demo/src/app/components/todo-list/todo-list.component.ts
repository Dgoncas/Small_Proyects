import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo-service.service';
import { Todo } from "../../models/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => this.todos=todos);
  }

  onDeleteTodo(todo:Todo){
    this.todos = this.todos.filter(todo2 => todo2.id!=todo.id);
    this.todoService.removeTodo(todo).subscribe(todo => console.log(todo));
  }

  onAddTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
  }

}
