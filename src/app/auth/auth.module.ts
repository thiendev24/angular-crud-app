import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { IAuthService } from './service/IAuth-service.interface';
import { AuthService } from './service/auth.service';
import { httpInterceptorProviders } from './helper/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ShareModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: IAuthService, useClass: AuthService },
    httpInterceptorProviders,
  ],
})
export class AuthModule {}
