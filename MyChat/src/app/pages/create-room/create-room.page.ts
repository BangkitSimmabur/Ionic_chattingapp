import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.page.html',
  styleUrls: ['./create-room.page.scss'],
})
export class CreateRoomPage implements OnInit {
  items = {
    token: '',
    userId: ''
  };
  name = '';

  constructor(public storage: Storage, public roomService: RoomService) { }

  ngOnInit() {
    this.storage.get('items').then((res) => {
      this.items = res.token;

    });
  }

  tes() {
    console.log(this.items.token);
    this.roomService.create(this.name, this.items.token).subscribe((response) => {
      console.log(response);
    });
  }

}
