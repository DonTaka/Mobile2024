import { AuthenticatorService } from './../../Servicios/authenticator.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  private username: String = "";
  constructor(private router: Router, private auth: AuthenticatorService) {
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      username: '';
      password: '';
    };
    this.username ? state.username : null
    //Console.log
    //Mensaje bienvenida
  }
  logout() {
    this.auth.logout()
    this.router.navigate(['/home']);
  }
  ngOnInit() { }
}
