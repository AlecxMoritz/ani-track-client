import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl: string = 'http://localhost:3000/messages/';

  constructor(private http: HttpClient) { }

  getAllMessages() {
    return this.http.get(this.baseUrl);
  }

  postMessage(message: any) {
    return this.http.post(this.baseUrl, { message: message }, httpOptions)
  }

  // editMessage() {

  // }

  deleteMessage(id: number) {
    let reqUrl = this.baseUrl + `${id}`;
    return this.http.delete(reqUrl);
  }
}
