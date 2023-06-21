import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user/user';
import { IAuthService } from '../service/IAuth-service.interface';
import Swal from 'sweetalert2';
import { confirmPasswordValidator } from 'src/app/share/custome/validators/confirmPasswordValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ]);
  email = new FormControl('', [
    Validators.pattern(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi),
    Validators.required,
  ]);
  age = new FormControl('', [Validators.min(18), Validators.max(100)]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirmPassword = new FormControl('', [
    Validators.required,
    confirmPasswordValidator(this.password),
  ]);
  phone = new FormControl('', [
    Validators.pattern(
      /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
    ),
  ]);

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phone: this.phone,
  });

  constructor(private authService: IAuthService) {}

  onSubmit() {
    if (this.registerForm.valid) {
      const user: User = {
        name: this.registerForm.value.name!,
        email: this.registerForm.value.email!,
        age: +this.registerForm.value.age!,
        password: this.registerForm.value.password!,
        phone: this.registerForm.value.phone!,
      };
      this.authService.register(user).subscribe({
        next: () => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Register successfully!',
            showConfirmButton: false,
            timer: 2000,
          });
          this.registerForm.reset();
        },
        error: (e) => console.log(e),
      });
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Please fill valid information!',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
}
