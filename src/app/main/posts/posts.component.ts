import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Posts } from './posts.model';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService],

  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {

  postSelected;
  editSelected;

  posts: Posts[];

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postSelected = this.route.snapshot.params['id'];
  }
}
