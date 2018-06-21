import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { PostsComponent } from './main/posts/posts.component';
import { PostAloneComponent } from './main/posts/post-alone/post-alone.component';
import { PostEditComponent } from './main/posts/post-edit/post-edit.component';

import { ClassToggleDirective } from './shared/class-toggle.directive';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostAloneComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    SidebarComponent,
    PostsComponent,
    PostAloneComponent,
    PostEditComponent,

    ClassToggleDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
