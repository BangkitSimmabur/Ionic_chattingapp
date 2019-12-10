import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {
  rooms: any;
  constructor(public roomService: RoomService, public storage: Storage) { }

  ngOnInit() {
    this.roomService.getRoom().subscribe((response) => {
      this.rooms = response;
    });
  }

}
