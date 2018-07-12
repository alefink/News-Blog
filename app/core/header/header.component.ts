import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor( public authService: AuthService,
               private router: Router) {}

  onLogOut() {
    this.router.navigate(['/']);
    return this.authService.logOutUser();
  }

  onMenuToggle() {
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('#menu');
    overlay.classList.add('toggled');
    menu.classList.add('is-visible');
  }

}
