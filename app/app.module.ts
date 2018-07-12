import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { PostsModule } from './posts/posts.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { PostsService } from './posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    AuthModule,
    CoreModule,
    PostsModule
  ],
  providers: [AuthService, AuthGuard, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
