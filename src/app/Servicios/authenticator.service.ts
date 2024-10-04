import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatorService {
  //Generamos una variable boolean para rectificar el actual estado de conexion con el autentificador
  connnectionStatus: boolean = false;
  constructor(private storage: StorageService) {}

  loginBDD(user: string, pass: String): Promise<boolean> {
    //OBtengo un promise
    //Promise tiene 2 valores || resuelto y no resuelto
    return this.storage
      .get(user)
      .then((res) => {
        //Si funciona me devuelve el user completo
        if (res.password == pass) {
          this.connnectionStatus = true;
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.log('Error en el sistema: ' + error);
        return false;
      });
  }
  //Generamos funcion para validar usuario contraseña
  //Si equivale a los datos configurados entregara valor true si no Indicara falso
  login(user: String, pass: String): boolean {
    if (user == 'j.riquelmee' && pass == 'pass1234') {
      this.connnectionStatus = true;
      return true;
    }
    this.connnectionStatus = false;
    return false;
  }
  //Logout para desconectar del sistema
  logout() {
    this.connnectionStatus = false;
  }
  //Funcion para consultar el estado de conexion
  isConected() {
    return this.connnectionStatus;
  }
  async registrar(user: any):Promise<boolean> {
    //set(llave,valor)
    return this.storage.set(user.username, user).then((res) => {
        if (res != null) {
          return true;
        }else{
          return false;
        }
      })
      .catch((error) => {
        return false;
      });
  }
}
