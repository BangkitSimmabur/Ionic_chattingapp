import { IonContent } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages = [
    {
      user: 'bangkit',
      createdAt: 1574819400000,
      msg: 'Hello there !'
    },
    {
      user: 'simmabur',
      createdAt: 1574819430000,
      msg: 'Hello, what\'s up?'
    },
    {
      user: 'bangkit',
      createdAt: 1574819500000,
      msg: 'Nothing much. You?'
    },
    {
      user: 'bangkit',
      createdAt: 1574819400000,
      msg: 'Hello there !'
    },
    {
      user: 'simmabur',
      createdAt: 1574819430000,
      msg: 'Hello, what\'s up?'
    },
    {
      user: 'bangkit',
      createdAt: 1574819500000,
      msg: 'Nothing much. You?'
    },
  ];

  currentUser = 'bangkit';
  friendUser = 'simmabur';
  newMsg = '';
  @ViewChild (IonContent, { static: true }) content: IonContent;

  constructor() {
    // this.content.scrollToBottom(200);
  }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messages.push({
      user: 'bangkit',
      createdAt: new Date().getTime(),
      msg: this.newMsg,
    });
    this.content.scrollToBottom(200);
  }

}
