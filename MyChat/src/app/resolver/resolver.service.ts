import { HttpClient } from 'selenium-webdriver/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor(
    private http: HttpClient
  ) { }
  resolve(route: ActivatedRouteSnapshot) {

  }
}
