import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private isAdmin = false;
  constructor() { }

  setAdminStatus(status: boolean) {
      this.isAdmin = status;
      console.log('isAdmin =>', this.isAdmin);
  }

  getAdminStatus() : boolean {
    return this.isAdmin;
  }
}
