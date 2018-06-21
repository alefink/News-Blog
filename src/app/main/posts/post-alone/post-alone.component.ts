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

  selectedPostId: number;
  selectedPost: Posts;

  posts: Posts[];

  constructor(private postsService: PostsService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.posts = this.postsService.getPosts();

    this.selectedPostId = +this.route.snapshot.params['id'];
    for (const postEl of this.posts) {
      if (postEl.id === this.selectedPostId ) {
        this.selectedPost = postEl;
      }
    }

  }
}
