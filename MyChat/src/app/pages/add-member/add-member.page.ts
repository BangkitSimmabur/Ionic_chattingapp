import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss'],
})
export class AddMemberPage implements OnInit {
  private roomId: number;
  constructor(private userService: UserService,
              private roomService: RoomService,
              private activatedRoute: ActivatedRoute,
              private toastController: ToastController) {}

  private users: {};

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Added to chat room.',
      duration: 2000
    });
    toast.present();
  }

  addMember(memberId) {
    this.roomService.addMember(this.roomId, memberId).subscribe((response) => {
      if (response) {
        this.presentToast();
      }
    });
  }

  ngOnInit() {
    this.userService.getUser().subscribe((response) => {
      this.users = response;
    });
    // tslint:disable-next-line: radix
    this.roomId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  }

}
