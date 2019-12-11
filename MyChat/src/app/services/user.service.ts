import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(public http: HttpClient, ) { }

  url = '/api/';

  register(data) {
    return this.http.post(this.url + 'users', data);
  }
  getUser() {
    return this.http.get(this.url + 'users');
  }
  getUserData(id) {
    return this.http.get(this.url + 'users/' + id);
  }
}
