import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  signUp = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() : void {
    this.signUp = !this.signUp;
  }

}
