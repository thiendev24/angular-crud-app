import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './home/header/nav/nav.component';
import { SidebarComponent } from './home/header/sidebar/sidebar.component';

@NgModule({
  declarations: [HomeComponent, NavComponent, SidebarComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
