import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Posts } from './posts.model';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root',
})

export class PostsService {

  constructor( private httpClient: HttpClient, private authService: AuthService ) {}

  private posts: Posts[] = [];

  storePosts() {
    const token = this.authService.getToken();
    return this.httpClient.put('https://someanothernewsblog.firebaseio.com/posts.json?auth=' + token, this.getPostsLocal());
  }

  getPosts() {
    return this.requestPosts().subscribe(
        (posts: any[]) => {
          this.posts = posts as Posts[];
        },
        (error) => console.log(error)
      );
  }

  requestPosts() {
    return this.httpClient.get<Posts[]>('https://someanothernewsblog.firebaseio.com/posts.json')
      .pipe( map(
        (response) => {
          return response;
        },
        (error) => console.log(error)
      ));
  }

  getPostsLocal() {
    return this.posts.slice();
  }

  getPost(id: number) {
    return this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
  }

  updatePost(id: number, postEdited: Posts) {
    const post = this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
    if (post) {
      const index = this.posts.indexOf(post);
      this.posts[index] = postEdited;
    } else {
      this.posts.push(postEdited);
    }
    this.storePosts().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  deletePost(id: number) {
    const post = this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
    if (post) {
      this.posts.splice(id - 1, 1);
    }
  }

  getDate() {
    return new Date().toISOString().slice(0, 10);
  }

}
