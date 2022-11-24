import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespAPI } from '../models/userList.interface';
import { Data } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'https://reqres.in/api/';

  constructor(

    private http: HttpClient

  ) { }

  getUsers() {

    return this.http.get<RespAPI>(this.url + 'users?page=1');

  }

  getUser(id: string) {

    return this.http.get<Data>(this.url + 'user/' + id);

  }
}
