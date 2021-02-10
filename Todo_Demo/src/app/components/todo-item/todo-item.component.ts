import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from '../../services/todo-service.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

  }

  getClass(){
    return {
      completed: this.todo.completed
    };
  }

  onChange(){
    this.todo.completed = !this.todo.completed;
    this.todoService.toggleCompleted(this.todo).subscribe(todo => console.log(todo));
  }

  onDeleteTodo(){
    this.deleteTodo.emit(this.todo);
  }

}
