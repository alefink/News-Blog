import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    SidebarComponent
  ]
})
export class CoreModule {}
