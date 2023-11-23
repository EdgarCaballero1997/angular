import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      repetirContraseña: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });    
  }

  // Custom validator for password match
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('contraseña')?.value;
    const confirmPassword = group.get('repetirContraseña')?.value;
  
    return password === confirmPassword ? null : { mismatch: true };
  }   

  onSubmit() {
    if (this.registerForm.valid) {
      // Realiza acciones con los datos del formulario
      console.log('Formulario válido:', this.registerForm.value);
    }
  }
}
