import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public users: User[] = [];

  constructor(

    private userService: UserService

  ) { }

  ngOnInit(): void {

    this.getUsers();

  }

 getUsers() {

    this.userService.getUsers().subscribe(resp => {

      this.users = resp.data;

      console.log(this.users);

    })

  }

}
