import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private US: UserService,
    private router: Router
  ) {
    let formControls = {
      lastName: new FormControl('', []),
      firstName: new FormControl('', []),
      phone: new FormControl('', []),
    };
    this.form = this.fb.group(formControls);
  }

  ngOnInit() {}

  addUser() {
    let data = this.form.value as User;
    //let user = new User(data.firstName, data.lastName, data.phone);
    this.US.update(data).then(() => {
      this.router.navigate(['/users']);
    });
  }
}
