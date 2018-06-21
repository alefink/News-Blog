import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import {Posts} from '../posts.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class PostEditComponent implements OnInit {

  @Input() thisPost: Posts;
  @Input() editMode;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

}
