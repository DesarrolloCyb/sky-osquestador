import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { environment } from 'environments/environment';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
})

export class AuthComponent implements OnInit {
  rememberMe: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void { }

  displayMsg: string = '';
  isUserValid: boolean = false;



//Campos requeridos para el LOGIN
  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    //rememberMe:  new FormControl(false, Validators.required)
  });





  loginSubmitedx() {

      this.authService.loginusery(
      [
        this.formLogin.value.email!,
        this.formLogin.value.pwd!,
      ]).subscribe((res) => {
        if (res != null) {
          this.isUserValid = true;
          this.authService.setToken();
        }else{
          console.log('ERROR DE CREDENCIALES.')
          //DEBE SER UNA ALERTA O MENSAJE
        }
      });
  }

  get Email(): FormControl {
    return this.formLogin.get('email') as FormControl;
  }

  get PWD(): FormControl {
    return this.formLogin.get('pwd') as FormControl;
  }

}





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
