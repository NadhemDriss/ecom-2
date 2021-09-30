import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/login';
  private apiRegister = 'http://localhost:8080/api/v1/auth/register';

  constructor(private http: HttpClient) {}
  register(appuser: AppUser) {
    return this.http.post<AppUser>(this.apiRegister, appuser).toPromise();
  }
  loginJwt(appuser: AppUser) {
    return this.http.post<any>(this.apiUrl, appuser).toPromise();
  }

  isLoggedIn() {
    let token = localStorage.getItem('mytoken');

    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
