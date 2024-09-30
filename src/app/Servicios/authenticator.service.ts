import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  //Generamos una variable boolean para rectificar el actual estado de conexion con el autentificador
  connnectionStatus: boolean;
  constructor(private storage: StorageService) {
    this.connnectionStatus = false;
  }
  loginBDD(user: string, pass: String): boolean {
    this.storage.get(user).then((val) => {
      if (val.password == pass) {
        console.log("usuario encontrado");
        this.connnectionStatus = true;
      } else {
        console.log("error pass");
      }
    }).catch((error) => {
      console.log("Error credenciales")
      this.connnectionStatus = false;
    });
    if (this.connnectionStatus) {
      return true;
    } else {
      return false;
    }
  }

  //Generamos funcion para validar usuario contraseña 
  //Si equivale a los datos configurados entregara valor true si no Indicara falso 
  login(user: String, pass: String): boolean {
    if (user == "j.riquelmee" && pass == "pass1234") {
      this.connnectionStatus = true;
      return true;
    }
    this.connnectionStatus = false;
    return false
  }
  //Logout para desconectar del sistema 
  logout() {
    this.connnectionStatus = false;
  }
  //Funcion para consultar el estado de conexion
  isConected() {
    return this.connnectionStatus;
  }
}
