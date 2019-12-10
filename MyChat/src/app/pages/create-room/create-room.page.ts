import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.page.html',
  styleUrls: ['./create-room.page.scss'],
})
export class CreateRoomPage implements OnInit {
  name = '';
  userId: number;
  room: any;

  constructor(private storage: Storage,
              private roomService: RoomService,
              private location: Location,
              private toastController: ToastController) { }

  ngOnInit() {
    this.storage.get('userData').then((val) => {
      this.userId = val.id;
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Room ' + this.name + 'created.',
      duration: 2000
    });
    toast.present();
  }

  createRoom() {
    this.roomService.create(this.name).subscribe((response) => {
      this.location.back();
      this.presentToast();
    });
  }

}
