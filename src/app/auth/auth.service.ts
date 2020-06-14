import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from './../../../environments/environment.prod';
import { environment } from './../../environments/environment.prod';
// import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModelModule } from './model/model.module';
import { stringify } from 'querystring';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private header;

  constructor(private httpClient: HttpClient, ) {

  }

  getToken() {
    return localStorage.getItem('currentUser');
  }

  getId(){
    return localStorage.getItem('idUser');
  }
  getRole(){
    return localStorage.getItem('Role');
  }
  getIdCDT(){
    return localStorage.getItem('IdCDT');
  }
  check(): boolean {
    return localStorage.getItem('currentUser') ? true : false;
  }
  // login(username: string, password: string): Observable<boolean> {
  //   return this.httpClient.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
  //     .pipe(map((response: Response) => {
  //       // login successful if there's a jwt token in the response
  //       let token = response.json() && response.json().token;
  //       if (token) {
  //         // set token property
  //         this.token = token;

  //         // store username and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

  //         // return true to indicate successful login
  //         return true;
  //       } else {
  //         // return false to indicate failed login
  //         return false;
  //       }
  //     }));
  // }

  login(UserName: string, PassWord: string): Observable<any> {
    this.header = new HttpHeaders({
      // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });
    const form = new FormData;
    form.append('UserName', UserName);
    form.append('PassWord', PassWord);
    return this.httpClient.post<any>('http://www.btlqlda.somee.com/api/User/Login', form, this.header)
    //{ UserName: UserName, PassWord: PassWord }
      .pipe(map(user => {
        if (user['token']) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', user['token']);
          localStorage.setItem('idUser', user['UserId']);
          localStorage.setItem('Role', user['Role']);
          localStorage.setItem('IdCDT', user['IdCDT']);
          // localStorage.removeItem('currentUser');
          console.log(user['token'])
        }
        return user;
      }));
  }


  

  // login(credentials):Observable<any>{
  //   const data1 = {
  //     UserName: credentials.UserName,
  //     PassWord : credentials.PassWord
  //   }
  //   return this.httpClient.post<any>('http://www.btlqlda.somee.com/api/User/Login',data1)
  //       .pipe(map(user => {
  //         // login successful if there's a jwt token in the response
  //         if (user) {
  //           // store user details and jwt token in local storage to keep user logged in between page refreshes
  //           localStorage.setItem('currentUser', user.UserId);
  //           console.log(user)
  //         }
  //         return user;
  //       }));
  // }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('idUser');
    localStorage.removeItem('Role');
    localStorage.removeItem('IdCDT');
  }
}



