import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Rest1 } from './rest1';
import { Entity4 } from './entity4';

@Injectable({
  providedIn: 'root'
})
export class MainLogicService {
  list = new BehaviorSubject<Entity4[]>([])
  // url:string="http://localhost:3000/users"
  //url:string="http://localhost:8080/users/Servlet1"
  url:string="http://localhost:1155/entity4s"
  // USERS:Entity4[]=[{id:1,name:"Roman", age:49},{id:2,name:"Olena", age:29}]

  constructor(private http:HttpClient) { }

  getItems():Observable<Rest1>{
    return this.http.get<Rest1>(this.url);
  }

  postItem(user:Entity4):Observable<Entity4[]>{
    return this.http.post<Entity4[]>(this.url,user);
  }

  putItem(user:Entity4):Observable<Entity4[]>{
    // return this.http.put<Entity4[]>(this.url+"/"+user,user);
    return this.http.put<Entity4[]>(user._links.entity4.href,user);
  }

  deleteItem(user:Entity4):Observable<Entity4[]>{
    // return this.http.delete<Entity4[]>(this.url+"/"+user);
    return this.http.delete<Entity4[]>(user._links.entity4.href);
  }

  setList(list:Entity4[]){
    this.list.next(list);
  }


  public inputs:string[] = ["", "", ""]
}
