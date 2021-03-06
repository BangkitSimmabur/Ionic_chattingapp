import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public authenticationService: AuthenticationService
  ) { }

  canActivate(): boolean {
    return this.authenticationService.isAuthenticated();
  }

}
