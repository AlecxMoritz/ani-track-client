import { Injectable, EventEmitter } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private _token: string;
  tokenChange = new EventEmitter<string>();
  constructor() { }

  storeToken(token: string) : void {
    this._token = token;
    this.tokenChange.emit('token stored');
    localStorage.setItem('token', token);
  }

  clearToken() {
    this._token = '';
    this.tokenChange.emit('token cleared')
    localStorage.removeItem('token');
  }

  getToken() : string {
    return this._token;
  }

  checkLocalToken() {
    let localToken = localStorage.getItem('token');

    const istokenExpired = this.checkLocalExp(localToken);
    if(!istokenExpired) {
      this.storeToken(localToken);
    }
  }

  checkTokenExp() : boolean {
   if(!this._token) return true;

   const date = this.getTokenExp(this._token);
   if(date === undefined) return false;
   return !(date.valueOf() > new Date().valueOf())
  }

  getTokenExp(token: string) {
    const decoded = jwt_decode(token);

    if(decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp)
  }

  checkLocalExp(token: string) {
    if(!token) return true;

    const date = this.getTokenExp(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf())
  }

}
