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
  private room: string;
  private id: number;
  private msg: any;
  private user: string;


  newMsg = '';
  @ViewChild(IonContent, { static: true }) content: IonContent;

  constructor(private activatedRoute: ActivatedRoute, private chatService: ChatService, private storage: Storage) {
  }

  getMsg() {
    this.chatService.getMessages(this.id).subscribe((res) => {
      this.msg = res;
      console.log(this.msg);
    });
  }


  ngOnInit() {
    this.room = this.activatedRoute.snapshot.paramMap.get('room');
    this.user = this.activatedRoute.snapshot.paramMap.get('user');
    this.msg = this.activatedRoute.snapshot.data.messages;
    // tslint:disable-next-line: radix
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.content.scrollToBottom(200);
  }

  sendMessage() {
    this.chatService.sendMessages(this.id, this.newMsg).subscribe(() => {
      this.getMsg();
    });
    this.content.scrollToBottom(200);
  }
}
