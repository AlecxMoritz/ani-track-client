import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) { }

  canActivate():  boolean {
      let tokenExp = this.tokenService.checkTokenExp();
      
      if(tokenExp === true) {
        this.router.navigate(['/auth'])
        return false;
      }
      
      return true;
  }
}