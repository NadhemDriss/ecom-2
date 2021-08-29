import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users';
  constructor(private http: HttpClient) {}

  getAllUsers(): Promise<User[]> {
    //return new Promise((resolve) => resolve(GLOBAL._DB.members));
    return this.http?.get<User[]>(this.apiUrl + '/all')?.toPromise();
  }
}
