import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  isLoggedIn = false;

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
    this.tokenService.tokenChange.subscribe(message => {
      if(message === 'token stored') {
        this.isLoggedIn = true;
        this.router.navigate(['/reviews'])
      } else {
        this.isLoggedIn = false;          
        this.router.navigate([''])
      }
    })

    this.tokenService.checkLocalToken();
  }
}