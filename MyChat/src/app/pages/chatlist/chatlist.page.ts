import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {
  rooms: any;
  user: string;
  constructor(public roomService: RoomService,
              public storage: Storage,
              public actionSheetController: ActionSheetController,
              private router: Router) { }

  ngOnInit() {
    this.getRoom();
    this.storage.get('userData').then((response) => {
      this.user = response.name;
    });
  }

  getRoom() {
    this.roomService.getRoom().subscribe((response) => {
      this.rooms = response;
    });
  }

  async presentActionSheet(id, room, user) {
    const actionSheet = await this.actionSheetController.create({
      header: room,
      buttons: [
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.delete(id);
          }
        },
        {
          text: 'Go to chat',
          icon: 'chatbubbles',
          handler: () => {
            this.router.navigate([`chat/${id}/${room}/${user}`]);
          }
        }, {
          text: 'add member',
          icon: 'person-add',
          handler: () => {
            this.router.navigate([`add-member/${id}`]);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

  delete(id) {
    this.roomService.deleteRoom(id).subscribe(() => {
      this.getRoom();
    });
  }

}
