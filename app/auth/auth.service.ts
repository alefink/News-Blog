import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { Users } from './users.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  users: Users[] = [];
  user;

  constructor( private router: Router, private httpClient: HttpClient ) {}

  uploadUsers() {
    const token = this.getToken();
    return this.httpClient.put('https://someanothernewsblog.firebaseio.com/users.json?auth=' + token, this.users);
  }

  logInUser(email: string, pass: string) {
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                // localStorage.setItem('token', token);
                this.user = this.getUserData();
                console.log(firebase.auth().currentUser.uid);
                this.router.navigate(['/']);
              }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logOutUser() {
    firebase.auth().signOut();
    this.token = null;
    // localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  createNewUser(email: string, pass: string) {
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
              }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  requestUsers() {
    return this.httpClient.get<Users[]>('https://someanothernewsblog.firebaseio.com/users.json')
      .pipe( map(
        (response) => {
          return response;
        },
        (error) => console.log(error)
      ));
  }


  getUserData() {}


  loginCheck() {
    firebase.auth().onAuthStateChanged((user) => {
      if ( user ) {
        console.log('already logged in');
        console.log('uid: ' + firebase.auth().currentUser.uid);
        this.token = this.getToken();
      } else {
        console.log('not logged in');
      }
    }, error => console.log(error));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
