import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  login(data) {
    let url = 'http://35.224.16.247/api/login';
    return this.http.post(url, data, { headers: new HttpHeaders({ 'content-Type': 'application/json' }) });
  }

  register(data) {
    let url = 'http://35.224.16.247/api/users';
    return this.http.post(url, data, { headers: new HttpHeaders({ 'content-Type': 'application/json' }) });
  }
}
