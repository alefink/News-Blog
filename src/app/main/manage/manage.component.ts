import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts/posts.service';
import { Posts } from '../posts/posts.model';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  posts: Posts[];

  constructor(
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.posts = this.postsService.getAllPosts();
  }

  onDelete(id: number) {
    if (confirm('Are you sure?')) {
      this.postsService.deletePost(id);
      this.posts = this.postsService.getAllPosts();
    }
  }

}
