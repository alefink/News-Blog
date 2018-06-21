import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  onMenuToggle() {
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('#menu');
    overlay.classList.add('toggled');
    menu.classList.add('is-visible');
  }

}
