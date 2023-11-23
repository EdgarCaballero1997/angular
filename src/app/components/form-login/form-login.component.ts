import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  user = {
    email: '',
    password: ''
  };

  onSubmit(loginForm: NgForm) {
    // Verificar si el formulario es válido antes de procesar la información
    if (loginForm.valid) {
      // Acceder a los valores del formulario a través de la propiedad 'value'
      this.user.email = loginForm.value.email;
      this.user.password = loginForm.value.password;

      // Aquí puedes realizar cualquier acción adicional con la información del usuario
      console.log('Usuario:', this.user);

      // También puedes reiniciar el formulario si es necesario
      loginForm.resetForm();
    }
  }
}