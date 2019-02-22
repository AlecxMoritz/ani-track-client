import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private isAdmin;
  private dbUrl = 'http://localhost:3000/auth/me';

  constructor(private http: HttpClient) { }

  findUser() {
    this.http.get<any>(this.dbUrl).subscribe(userData => {
      this.isAdmin = userData.isAdmin
    })
  }

  setAdminStatus(status: boolean) {
      this.isAdmin = status;
  }

  getAdminStatus() : boolean {
    return this.isAdmin;
  }
}
