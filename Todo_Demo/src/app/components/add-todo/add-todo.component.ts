import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo-service.service';
import { Output, EventEmitter } from "@angular/core";
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})

export class AddTodoComponent implements OnInit {

  @Output() addTodo : EventEmitter<Todo> = new EventEmitter();
  title:string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onAddTodo(){
    const todo={
      title:this.title,
      completed:false
    }
    this.todoService.addTodo(todo).subscribe(todo => this.addTodo.emit(todo));
    this.title = "";
  }

}
