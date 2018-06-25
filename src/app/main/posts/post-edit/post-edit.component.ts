import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Posts } from '../posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  @ViewChild('editForm') signUpForm: NgForm;

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
    this.posts = this.postEditService.getAllPosts();
    this.route.params.subscribe(params => this.postId = +params.id);

    if (this.postId < this.posts.length + 1) {
      this.selectedPost = this.postEditService.getPost(this.postId);
    } else {
      this.postDate = this.postEditService.getDate();
      this.selectedPost = new Posts(+this.postId, '', '', 'Jane Doe', '/assets/images/avatar.jpg',
        '', this.postDate, '', '', 0, 0);
      this.isEdit = 0;
    }
  }

  onSubmit() {
      this.selectedPost.title = this.signUpForm.form.value.title;
      this.selectedPost.description = this.signUpForm.form.value.description;
      this.selectedPost.category = this.signUpForm.form.value.category;
      this.selectedPost.imagePath = this.signUpForm.form.value.imagePath;
      this.selectedPost.postText = this.signUpForm.form.value.postText;

      this.postEditService.updatePost(this.selectedPost.id, this.selectedPost);
      this.router.navigate(['/manage']);
  }

}
