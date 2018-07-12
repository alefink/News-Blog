import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Users } from '../users.model';

@Component({
  selector: 'app-auth-manage',
  templateUrl: './auth-manage.component.html',
  styleUrls: ['./auth-manage.component.css']
})
export class AuthManageComponent implements OnInit {

  users: Users[];

  constructor(  private authService: AuthService ) { }

  ngOnInit() {
  }

  uploadUsers() {
    this.authService.uploadUsers()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  getUser() {}

    // this.authService.uploadUsers()
    //   .subscribe(
    //     (response) => console.log(response),
    //     (error) => console.log(error)
    //   );
}
