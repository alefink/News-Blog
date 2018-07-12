import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { Posts } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-alone',
  templateUrl: './post-alone.component.html',
  styleUrls: ['./post-alone.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class PostAloneComponent implements OnInit {

  private postId: number;
  selectedPost: Posts;

  posts: Posts[];

  constructor(private postsService: PostsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.posts = this.postsService.getPostsLocal();
    this.route.params.subscribe(params => this.postId = +params.id);

    this.selectedPost = this.postsService.getPost(this.postId);
  }
}
