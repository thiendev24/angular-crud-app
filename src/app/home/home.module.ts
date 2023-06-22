import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './home/header/nav/nav.component';
import { SidebarComponent } from './home/header/sidebar/sidebar.component';
import { IntroComponent } from './home/main/intro/intro.component';
import { FeatureComponent } from './home/main/feature/feature.component';
import { SavingMoneyComponent } from './home/main/saving-money/saving-money.component';
import { HowItWorksComponent } from './home/main/how-it-works/how-it-works.component';

@NgModule({
  declarations: [HomeComponent, NavComponent, SidebarComponent, IntroComponent, FeatureComponent, SavingMoneyComponent, HowItWorksComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
