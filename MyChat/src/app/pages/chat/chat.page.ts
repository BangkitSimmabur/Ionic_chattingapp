import { IonContent } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  // messages = [
  //   {
  //     user: 'bangkit',
  //     createdAt: 1574819400000,
  //     msg: 'Hello there !'
  //   },
  //   {
  //     user: 'simmabur',
  //     createdAt: 1574819430000,
  //     msg: 'Hello, what\'s up?'
  //   },
  //   {
  //     user: 'bangkit',
  //     createdAt: 1574819500000,
  //     msg: 'Nothing much. You?'
  //   },
  //   {
  //     user: 'bangkit',
  //     createdAt: 1574819400000,
  //     msg: 'Hello there !'
  //   },
  //   {
  //     user: 'simmabur',
  //     createdAt: 1574819430000,
  //     msg: 'Hello, what\'s up?'
  //   },
  //   {
  //     user: 'bangkit',
  //     createdAt: 1574819500000,
  //     msg: 'Nothing much. You?'
  //   },
  // ];

  private name: string;
  private id: number;
  private messages: any;
  private token: string;
  private userData: any;


  newMsg = '';
  @ViewChild(IonContent, { static: true }) content: IonContent;

  constructor(private activatedRoute: ActivatedRoute, private chatService: ChatService, private storage: Storage) {
  }

  getMsg() {
    this.chatService.getMessages(this.id, this.token).subscribe((res) => {
      this.messages = res;
      console.log(this.messages);
    });
  }


  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.storage.get('userData').then((response) => {
      this.userData = response;
      console.log(this.userData);
    });
    // tslint:disable-next-line: radix
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.storage.get('token').then((res) => {
      this.token = res;
      this.getMsg();
    });
  }

  // sendMessage() {
  //   this.messages.push({
  //     user: 'bangkit',
  //     createdAt: new Date().getTime(),
  //     msg: this.newMsg,
  //   });
  //   this.content.scrollToBottom(200);
  // }
  sendMessage() {
    this.chatService.sendMessages(this.id, this.newMsg, this.token).subscribe((response) => {
      console.log(response);
      this.getMsg();
    });
  }
}
