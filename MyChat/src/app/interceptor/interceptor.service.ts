import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  Router
} from '@angular/router';
import { ToastController } from '@ionic/angular';

const TOKEN_KEY = 'token';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public toastController: ToastController, public storage: Storage, ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return from(this.storage.get(TOKEN_KEY))
      .pipe(
        switchMap(token => {
          if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
          }

          if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
          }


          return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
              return event;
            }),
          );
        })
      );
  }
}

