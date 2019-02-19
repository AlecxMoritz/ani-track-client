import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUp: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private tokenService: TokenService
    ) { }

  ngOnInit() {
    this.signUp = this.fb.group({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() : void {
    this.authService.signUp(this.signUp.value).subscribe(userData => {
      this.tokenService.storeToken(userData.token);
    });
  }
}
