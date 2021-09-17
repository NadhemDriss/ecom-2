import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/models/app-user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
     private US: UserService,
      private LS: LoginService,
      private route: Router) {
    let formControls = {
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    };

    this.form = this.fb.group(formControls);
  }
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  ngOnInit(): void {}

  submit() {
    {
      let data=this.form.value as AppUser;
      console.log(this.form);
      this.LS.loginJwt(data).then((res) => {
        console.log(res);
        
        localStorage.setItem('mytoken',res.token);
        this.route.navigateByUrl('/users')
      }).catch ((err)=>{console.log(err)});
      
    }
  }
}
