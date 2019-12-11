import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ChatService } from '../services/chat.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor( private chatService: ChatService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');

    return this.chatService.getMessages(id);

  }
}
