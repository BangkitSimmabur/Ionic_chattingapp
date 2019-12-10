import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient, ) { }

  private url = '/api/';


  create(data) {
    return this.http.post(this.url + 'rooms', { room_name: data });
  }

  getRoom() {
    return this.http.get(this.url + 'rooms');
  }

  addMember(data, data2) {
    return this.http.post(this.url + 'members', { room_id: data, user_id: data2 });
  }
}
