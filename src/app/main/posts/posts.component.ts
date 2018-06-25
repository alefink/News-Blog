import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import { Posts } from './posts.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {

  posts: Posts[];

  constructor(
    private postsService: PostsService) {
  }

  ngOnInit() {
    this.posts = this.postsService.getAllPosts();
  }

}
