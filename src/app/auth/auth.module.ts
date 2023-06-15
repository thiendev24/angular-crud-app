import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { IAuthService } from './service/IAuth-service.interface';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, ShareModule, AuthRoutingModule, ReactiveFormsModule],
  providers: [{ provide: IAuthService, useClass: AuthService }],
})
export class AuthModule {}
