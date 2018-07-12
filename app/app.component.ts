import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBKmI12uOiuu3aD8VhrDeG9DSDSDdto9e4',
      authDomain: 'someanothernewsblog.firebaseapp.com'
    });
  }

  menuHide() {
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('#menu');
    overlay.classList.remove('toggled');
    menu.classList.remove('is-visible');
  }
}
