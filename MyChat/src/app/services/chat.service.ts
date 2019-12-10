import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient, ) { }

  private url = '/api/';

  getMessages(id) {
    return this.http.get(this.url + 'messages/' + id);
  }

  sendMessages(data, data2) {
    return this.http.post(this.url + 'messages', { room_id: data, content: data2 });
  }
}
