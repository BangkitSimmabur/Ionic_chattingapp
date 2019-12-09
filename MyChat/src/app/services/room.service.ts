import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient, ) { }

  private url = 'http://35.224.16.247/api/';


  create(data, token) {
    return this.http.post(this.url + 'rooms', { room_name: data },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        })
      });
  }

  getRoom(token) {
    return this.http.get(this.url + 'rooms',
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        })
      });
  }

  addMember(data, data2, token) {
    return this.http.post(this.url + 'members', { room_id: data, user_id: data2 }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    });
  }
}
