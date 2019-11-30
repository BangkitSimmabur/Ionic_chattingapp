import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {

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
