import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, ShareModule, AuthRoutingModule],
})
export class AuthModule {}
