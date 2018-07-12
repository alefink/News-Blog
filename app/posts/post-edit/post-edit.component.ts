import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Posts } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  private postId: number;
  selectedPost: Posts;
  isEdit;
  postDate;
  posts: Posts[];


  constructor(private postEditService: PostsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {

    this.isEdit = 1;
    this.posts = this.postEditService.getPostsLocal();
    this.route.params.subscribe(params => this.postId = +params.id);

    this.postSelecting();
  }


  onSubmit(editForm) {
    const post = this.selectedPost;

    post.title = editForm.title;
    post.description = editForm.description;
    post.category = editForm.category;
    post.imagePath = editForm.imagePath;
    post.postText = editForm.postText;

    this.postEditService.updatePost(post.id, post);
    this.router.navigate(['/manage']);
  }


  private postSelecting() {
    if (this.postEditService.getPost(this.postId)) {
      this.selectedPost = this.postEditService.getPost(this.postId);
    } else {
      this.postDate = this.postEditService.getDate();
      this.selectedPost = new Posts(+this.postId, '', '', 'Jane Doe', '/assets/images/avatar.jpg',
        '', this.postDate, '', '', 0, 0);
      this.isEdit = 0;
    }
  }
}
