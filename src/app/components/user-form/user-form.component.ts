import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private US: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    let formControls = {
      lastName: new FormControl('', []),
      firstName: new FormControl('', []),
      phone: new FormControl('', []),
    };
    this.form = this.fb.group(formControls);
  }

  ngOnInit() {
    let idUser = this.activatedRoute.snapshot.params.id;
    this.US.getUserById(idUser).then((item) => {
      this.form.patchValue({
        lastName: item.lastName,
        firstName: item.firstName,
        phone: item.phone,
      });
    });
  }

  updateUser() {
    let data = this.form.value as User;
    let idUser = this.activatedRoute.snapshot.params.id;
    //let user = new User(data.firstName, data.lastName, data.phone, idUser);
    this.US.update(data).then(() => {
      this.router.navigate(['/users']);
    });
  }
}
