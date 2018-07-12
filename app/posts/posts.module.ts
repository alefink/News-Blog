import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { PostsComponent } from './posts.component';
import { PostAloneComponent } from './post-alone/post-alone.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostAloneComponent,
    PostEditComponent,
    ManageComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class PostsModule {}
