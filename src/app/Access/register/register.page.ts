import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticatorService } from 'src/app/Servicios/authenticator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {
    username: '',
    email: '',
    password: '',
  };
  constructor(
    private auth: AuthenticatorService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async registrar() {
    this.auth
      .registrar(this.user)
      .then((res) => {
        this.router.navigate(['/home']);
        return this.toastController.create({
          message: 'Registrado con exito',
          duration: 5000,
          position: 'bottom',
        });
      })
      .then((toast) => toast.present())
      .catch((error) => {
        return this.toastController
          .create({
            message: 'Error al registrar',
            duration: 5000,
            position: 'bottom',
          })
          .then((toast) => toast.present());
      });
  }
}
