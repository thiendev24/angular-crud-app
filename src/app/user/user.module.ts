import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { InputComponent } from './components/input/input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, InputComponent],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule, FormControl],
})
export class UserModule {}
