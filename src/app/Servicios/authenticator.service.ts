import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  //Generamos una variable boolean para rectificar el actual estado de conexion con el autentificador
  connnectionStatus: boolean = false;
  constructor() { }
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
