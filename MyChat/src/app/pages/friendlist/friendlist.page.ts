import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.page.html',
  styleUrls: ['./friendlist.page.scss'],
})
export class FriendlistPage implements OnInit {
  items = [
    {
      user: 'simmabur',
      img: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png',
    },
    {
      user: 'arya',
      img: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png',
    },
    {
      user: 'john',
      img: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
