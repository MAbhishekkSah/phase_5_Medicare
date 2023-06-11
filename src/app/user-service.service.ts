import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserClass } from './user-class';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  baseUrl:String = "http://localhost:8081/user";
  getAllUsers():Observable<UserClass[]> {
    let endPoint = "getAllUsers";
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.get<UserClass[]>(`${url}`);
  }

  getUserById(id:any):Observable<UserClass>
  {
      let endPoint = 'getUser';
      let url = `${this.baseUrl}/${endPoint}/${id}`;
      return this.http.get<UserClass>(url);
  }

  getUserByEmail(email:string):Observable<any>{
    let endPoint = "getUserByEmail";
    let url = `${this.baseUrl}/${endPoint}/${email}`;
    console.log("Url -> "+url);
    return this.http.get<any>(url);
  }

  addUser(user:any):Observable<UserClass>{
    let endPoint = 'addUser';
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.post<UserClass>(`${url}`,user);
  }
}
