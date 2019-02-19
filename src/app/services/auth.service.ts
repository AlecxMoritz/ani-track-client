import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) { }

  login(userInfo: any) : Observable<any> {
    let reqUrl = this.baseUrl + '/login';
    return this.http.post(reqUrl, { user : userInfo }, httpOptions);
  }

  signUp(userInfo: any) : Observable<any>{
    let reqUrl = this.baseUrl + '/signup';
    return this.http.post(reqUrl, { user : userInfo }, httpOptions);
  }
}
