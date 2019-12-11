import { mergeMap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import {
  Router
} from '@angular/router';
import { ToastController } from '@ionic/angular';

const TOKEN_KEY = 'token';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private router: Router,
              public toastController: ToastController, public storage: Storage, ) { }
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
              if (event instanceof HttpResponse) {
                // do nothing for now
              }
              return event;
            }),
            // catchError((error: HttpErrorResponse) => {
            //   const status = error.status;
            //   const reason = error && error.error.reason ? error.error.reason : '';
            //   return throwError(error);
            // })
          );
        })
      );
  }

  // async presentToast(msg) {
  //   const toast = await this.toastController.create({
  //     message: msg,
  //     duration: 2000,
  //     position: 'top'
  //   });
  //   toast.present();
  // }
  //   if (token) {
  //     request = request.clone({
  //       setHeaders: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //   }

  //   if (!request.headers.has('Content-Type')) {
  //     request = request.clone({
  //       setHeaders: {
  //         'content-type': 'application/json'
  //       }
  //     });
  //   }

  //   request = request.clone({
  //     headers: request.headers.set('Accept', 'application/json')
  //   });

  //   return next.handle(request).pipe(
  //     map((event: HttpEvent<any>) => {
  //       if (event instanceof HttpResponse) {
  //         console.log('event--->>>', event);
  //       }
  //       return event;
  //     }),
  //     catchError((error: HttpErrorResponse) => {
  //       if (error.status === 401) {
  //         if (error.error.success === false) {
  //           this.presentToast(token);
  //         } else {
  //           this.presentToast(token);
  //         }
  //       }
  //       return throwError(error);
  //     }));
  // }
  // async presentToast(msg) {
  //   const toast = await this.toastController.create({
  //     message: msg,
  //     duration: 2000,
  //     position: 'top'
  //   });
  //   toast.present();
  // }
  // getToken() {
  //   return this.storage.get('token');
  // }
}

