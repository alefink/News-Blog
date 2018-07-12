import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { ManageComponent } from './posts/manage/manage.component';
import { AuthManageComponent } from './auth/auth-manage/auth-manage.component';

import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostsComponent } from './posts/posts.component';
import { PostAloneComponent } from './posts/post-alone/post-alone.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {AuthGuard} from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'manage', canActivate: [AuthGuard], component: ManageComponent },
  { path: 'auth-manage', canActivate: [AuthGuard], component: AuthManageComponent },

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

export class AppRoutingModule {}
