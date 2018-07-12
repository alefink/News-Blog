import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService ) {}

  ngOnInit() {
  }

  onSignIn(form) {
    const email = form.email;
    const password = form.password;
    this.authService.logInUser(email, password);
  }

}
