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
  users: any;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserData(this.id).subscribe((response) => {
      this.users = response;
      console.log(this.users);
    });
  }

}
