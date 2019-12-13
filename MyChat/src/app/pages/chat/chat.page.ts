import { IonContent, ActionSheetController, ToastController } from '@ionic/angular';
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

  constructor(private activatedRoute: ActivatedRoute,
              private actionSheetController: ActionSheetController,
              private chatService: ChatService,
              private toastController: ToastController) {
  }

  getMsg() {
    this.chatService.getMessages(this.id).subscribe((res) => {
      this.msg = res;
    });
    this.content.scrollToBottom();
  }


  ngOnInit() {
    this.room = this.activatedRoute.snapshot.paramMap.get('room');
    this.user = this.activatedRoute.snapshot.paramMap.get('user');
    // tslint:disable-next-line: radix
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.msg = this.activatedRoute.snapshot.data.messages;
    this.content.scrollToBottom();
  }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Delete message',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.delete(id);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            this.presentToast('Canceled');
          }
        }]
    });
    await actionSheet.present();
  }

  sendMessage() {
    this.chatService.sendMessages(this.id, this.newMsg).subscribe(() => {
      this.getMsg();
    });
  }

  delete(id) {
    this.chatService.deleteMessage(id).subscribe(() => {
      this.getMsg();
    });
  }
}
