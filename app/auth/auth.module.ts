import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AuthManageComponent } from './auth-manage/auth-manage.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    LoginComponent,
    AuthManageComponent
  ]
})
export class AuthModule {}
