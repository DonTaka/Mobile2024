import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  user = {
    "username": "",
    "password": ""
  }
  username: String = "";
  password: String = "";

  Validar() {
    if (this.username.length != 0) {
      if (this.password.length != 0) {
        console.log("username:" + this.username + "\n password: " + this.password)
        let navigationExtras: NavigationExtras = {
          state: {
            "username": this.username,
            "password": this.password
          }
        }
        this.router.navigate(["/dashboard"], navigationExtras)
      } else {
        console.log("Contraseña vacia ")
      }
    } else {
      console.log("Username Vacio")
    }

  }
}
