import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient, ) { }

  private url = 'http://35.224.16.247/api/';

  getMessages(id, token) {
    return this.http.get(this.url + 'messages/' + id,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        })
      });
  }

  sendMessages(data, data2, token) {
    return this.http.post(this.url + 'messages', { room_id: data, content: data2 }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    });
  }
}
