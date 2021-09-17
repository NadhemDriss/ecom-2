import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users/';
  constructor(private http: HttpClient) {}

  getAllUsers(): Promise<User[]> {
    //return new Promise((resolve) => resolve(GLOBAL._DB.members));
    let token=localStorage.getItem("mytoken")
  
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    return this.http?.get<User[]>(this.apiUrl + 'all',{headers:options})?.toPromise();
  }

  deleteUser(id: any) {
    let token=localStorage.getItem("mytoken")
  
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    return this.http?.delete<User[]>(this.apiUrl + id,{headers:options})?.toPromise();
  }

  getUserById(id: any): Promise<User> {
    let token=localStorage.getItem("mytoken")
  
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    return this.http?.get<User>(this.apiUrl + id,{headers:options})?.toPromise();
  }

  update(user: User): Promise<User> {
    let token=localStorage.getItem("mytoken")
  
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    console.log(user);
    return this.http.put<User>(this.apiUrl, user,{headers:options}).toPromise();
  }
}
