import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.page.html',
  styleUrls: ['./create-room.page.scss'],
})
export class CreateRoomPage implements OnInit {
  token = '';
  name = '';
  userId: number;
  room: any;

  constructor(public storage: Storage, public roomService: RoomService) { }

  ngOnInit() {
    this.storage.get('token').then((res) => {
      this.token = res;
    });
    this.storage.get('userData').then((val) => {
      this.userId = val.id;
    });
  }

  tes() {
    this.roomService.create(this.name, this.token).subscribe((response) => {
      console.log(response);
    });
  }

}
