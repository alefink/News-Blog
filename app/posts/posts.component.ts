import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service';
import { Posts } from './posts.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];
  user;
  postsShown: Posts[];
  page;

  constructor(
    private postsService: PostsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.page = 0;
    this.postsService.getPosts();
    this.authService.loginCheck();

    this.postsService.requestPosts().subscribe(
      (posts: any[]) => {
       this.posts = posts as Posts[];
       return this.postsShown = this.posts.slice().reverse().slice(this.page, this.page + 3 );
      },
      (error) => console.log(error)
    );
  }

  onSave() {
    this.postsService.storePosts()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onLoad() {
    this.posts = this.postsService.getPostsLocal();
    this.postsShown = this.posts.slice().reverse().slice(this.page, this.page + 3 );
  }

  onNext() {
    if (this.page >= 0 && this.postsShown.length === 3 ) {
      this.page += 3;
      this.postsShown = this.posts.slice().reverse().slice(this.page, this.page + 3);
    }
  }
  onPrevious() {
    if (this.page >= 3) {
      this.page -= 3;
      this.postsShown = this.posts.slice().reverse().slice(this.page, this.page + 3);
    }
  }
}
