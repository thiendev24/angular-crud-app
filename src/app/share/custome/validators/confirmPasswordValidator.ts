import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator = (
  password: AbstractControl
): ValidatorFn => {
  return (confirmPassword: AbstractControl): ValidationErrors | null => {
    const pw = password.value;
    const target = confirmPassword.value;

    if (!target) return null;

    const confirm = target === pw;

    return confirm ? null : { confirmPassword: true };
  };
};
