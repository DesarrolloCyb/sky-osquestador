import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  rememberMe: boolean = false;

  formLogin: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder, private router: Router) {
    this.formLogin = this.formBuilder.group({
      usuario: [environment.user, Validators.required],
      password: [environment.password, Validators.required],
      remember: [null],
    });
  }

  onSignIn() {
    this.formLogin.markAllAsTouched();
    this.router.navigate(['/home']);
    /*
        if (this.formLogin.valid) {
            this.inicioSesionService
                .signIn(formData)
                .then(async (response: any) => {
                    if (response.data.usuario) {
                        this.inicioSesionService.setUser(response.data);
                    } else {
                        this.notificationService.show(
                            '',
                            'Usuario y/o contraseña incorrecta(s)',
                            'error',
                            arguments[0]
                        );
                    }
                })
                .catch((error: any) => {
                    console.log(error);

                    if (
                        error.error.errorMessage ==
                        'Error: Registro no existente.'
                    ) {
                        this.notificationService.showError(
                            'Contacte al administrador',
                            'Usuario o contraseña incorrectos'
                        );
                    } else {
                        this.notificationService.showError(
                            'Contacte al administrador',
                            error.error.errorMessage
                        );
                    }
                });
        }*/
  }
}
