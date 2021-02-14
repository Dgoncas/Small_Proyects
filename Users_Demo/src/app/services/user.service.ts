import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  api: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getUsers(): Observable<any>{
    return  this.http.get(this.api);
  }

  getUser(id: number): Observable<any>{
    const url = `${this.api}/${id}`;
    return this.http.get(url);
  }

}
