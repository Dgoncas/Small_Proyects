import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todosURL:string = 'https://jsonplaceholder.typicode.com/todos';
  httpOptions = {
    headers:new HttpHeaders({
      'content-type':'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  getTodos() : Observable<any>{
    return this.http.get(`${this.todosURL}?_limit=5`);
  }

  toggleCompleted(todo:Todo) : Observable<any>{
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.put(url,todo,this.httpOptions);
  }

  removeTodo(todo:Todo) : Observable<any>{
    const url = `${this.todosURL}/${todo.id}`;
    return this.http.delete(url);
  }

  addTodo(todo:any) : Observable<any>{
    return this.http.post(this.todosURL,todo,this.httpOptions);
  }

}
