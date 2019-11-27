
import { IonContent } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
  ];

  currentUser = 'bangkit';
  newMsg = '';
  @ViewChild(IonContent, { static: true }) content: IonContent;

  constructor() { }

  sendMessage() {
    this.messages.push({
      user: 'bangkit',
      createdAt: new Date().getTime(),
      msg: this.newMsg,
    });
    console.log(this.content);
    this.content.scrollToBottom(200);
  }

}
