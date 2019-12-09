import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(public http: HttpClient, ) { }

  url = 'http://35.224.16.247/api/';
  // http://35.224.16.247/api/members

  // http://35.224.16.247/api/rooms
  create(data, token) {
    return this.http.post(this.url + 'rooms', data,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        })
      });
  }
  addMember(data, token) {
    return this.http.post(this.url + 'members', data,
    );
  }
}
