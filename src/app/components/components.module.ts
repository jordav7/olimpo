import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubmenuComponent } from './sidebar/submenu/submenu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SubmenuComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SubmenuComponent
  ]
})
export class ComponentsModule { }
