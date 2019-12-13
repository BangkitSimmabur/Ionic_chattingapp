import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.page.html',
  styleUrls: ['./userdetail.page.scss'],
})
export class UserdetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  id: any;
  user: any;

  ngOnInit() {
    this.user = this.activatedRoute.snapshot.data.user;
  }

}
