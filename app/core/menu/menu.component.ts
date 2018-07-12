import { Component, OnInit } from '@angular/core';

@Component({
  selector: `app-menu`,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  onMenuToggle() {
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('#menu');
    overlay.classList.remove('toggled');
    menu.classList.remove('is-visible');
  }
}
