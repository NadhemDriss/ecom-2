import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  dataSource: MatTableDataSource<User>;

  displayedColumns: string[] = ['firstName', 'lastName', 'phone'];

  constructor(private US: UserService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.fetchDataSource();
  }

  fetchDataSource(): void {
    this.US.getAllUsers().then((data) => (this.dataSource.data = data)); // .data : predifined property to accede the data in dataSource cause type of data source is matTable
  }
}
