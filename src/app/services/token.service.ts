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
  }

  clearToken() {
    this._token = '';
    this.tokenChange.emit('token cleared')
  }

  getToken() : string {
    return this._token;
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
}
