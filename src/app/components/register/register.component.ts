import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/models/app-user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
    
     private LS: LoginService,
     private route: Router) { 
      let formControls = {
         name: new FormControl('', [Validators.required]),
         email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        repassword: new FormControl('', [
          Validators.required,
        ]),
      };
  
      this.form = this.fb.group(formControls);
    }
    
     
     get  name(){return this.form.get('name')}
     get  email(){return this.form.get('email')}
     get password(){return this.form.get('password')}
     get repassword(){return this.form.get('repassword')}
  ngOnInit(): void {
  }
  registerUser(){
    let data=this.form.value as AppUser;
    this.LS.register(data).then((res)=>{
      console.log(res)
      this.route.navigateByUrl('/login');
    }).catch((err)=>{console.log(err)})

  }

}
