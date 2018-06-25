import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ManageComponent } from './main/manage/manage.component';
import { PostsComponent } from './main/posts/posts.component';
import { PostAloneComponent } from './main/posts/post-alone/post-alone.component';
import { PostEditComponent } from './main/posts/post-edit/post-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ClassToggleDirective } from './shared/class-toggle.directive';

import { AppRoutingModule } from './app-routing.module';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    SidebarComponent,

    ManageComponent,
    PostsComponent,
    PostAloneComponent,
    PostEditComponent,
    NotFoundComponent,

    ClassToggleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
