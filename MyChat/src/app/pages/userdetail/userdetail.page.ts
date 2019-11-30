import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.page.html',
  styleUrls: ['./userdetail.page.scss'],
})
export class UserdetailPage implements OnInit {

  constructor() { }

  currentUser = 'bangkit';
  friendUser = 'simmabur';

  ngOnInit() {
  }

}
