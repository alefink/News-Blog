import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './main/manage/manage.component';
import { PostEditComponent } from './main/posts/post-edit/post-edit.component';
import { PostsComponent } from './main/posts/posts.component';
import { PostAloneComponent } from './main/posts/post-alone/post-alone.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {AuthGuard} from './auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full'},
  { path: 'manage', canActivate: [AuthGuard], component: ManageComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostAloneComponent },
  { path: 'posts/:id/edit', canActivate: [AuthGuard], component: PostEditComponent },

  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
