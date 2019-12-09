import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(public http: HttpClient, ) { }

  url = 'http://35.224.16.247/api/';

  login(data) {
    return this.http.post(this.url + 'login', data,
      { headers: new HttpHeaders({ 'content-Type': 'application/json' }) });
  }

  register(data) {
    return this.http.post(this.url + 'users', data,
      { headers: new HttpHeaders({ 'content-Type': 'application/json' }) });
  }
  getUser() {
    return this.http.get(this.url + 'users',
      { headers: new HttpHeaders({ 'content-Type': 'application/json' }) });
  }
  getUserData(id) {
    return this.http.get(this.url + 'users/' + id,
      { headers: new HttpHeaders({ 'content-Type': 'application/json' }) });
  }
}
