import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { IuserSignup } from '../Interfaces/iuser-signup';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient, private router: Router) {
    if (typeof window !== 'undefined' && localStorage.getItem('userToken')) {
      this.setUserToken();
    }
  }

  userToken: BehaviorSubject<string> = new BehaviorSubject('');

  setUserToken() {
    let token = JSON.stringify(localStorage.getItem('userToken'));
    this.userToken.next(token);
  }

  register(userSignup: IuserSignup): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      userSignup
    );
  }
  Login(userSignin: IuserSignup): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      userSignin
    );
  }
  LogOut() {
    localStorage.removeItem('userToken');
    this.userToken.next('');
    this.router.navigate(['/login']);
  }
}
