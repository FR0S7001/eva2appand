import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Solo números permitidos
      password: ['', [Validators.required, this.passwordValidator]]
    });
   }
   // Validador personalizado para la contraseña
   passwordValidator(control: AbstractControl) {
    const password = control.value;
  
    if (!password) {
      return { passwordInvalid: true };
    }

    // Validación de al menos 4 números, 3 caracteres y 1 mayúscula
    const hasNumber = /\d{4}/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]{3}/.test(password);

    const valid = hasNumber && hasUppercase && hasSpecialChars;

    if (!valid) {
      return { passwordInvalid: true };
    }

    return null;
  }

  registro() {
    if (this.signupForm.valid) {
      // Lógica de registro aquí
    } else {
      // Muestra errores de validación
    }
  }

  ngOnInit() {
  }

}
