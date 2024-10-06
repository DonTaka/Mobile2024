import { Component, OnInit } from '@angular/core';
import { APIControllerService } from 'src/app/Servicios/apicontroller.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.page.html',
  styleUrls: ['./controller.page.scss'],
})
export class ControllerPage implements OnInit {

  users: any[] = [];
  constructor(private api: APIControllerService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }
  /* Al momento de instancia el apiController y recuperar el valor del observable en cada metodo
    para consumirlo y controlarlo usaremos la funcion suscribe , la cual nos permite revisar el resultado 
    al controlar la llamada de la API aplicaremos una logica estilo Try Catch
    La cual nos permitira revisar el estado postivo(200,300) y manejar el negativo(400,500)

    Adicionalmente usaremos una sintaxis ngFor para realizar un recorrido foreach del resultado entragado por la APIRest
    Usaremos una variable any[] para recibir los datos y estos seran mostrados en el front segun los resultados que se encuentren
    de esta manera podremos mostrar toda la informacion almacenada en el JSON que usaremos como API
  */
  cargarUsuarios() {
    this.api.getUsers().subscribe(
      (data) => {
        this.users = data
        console.log(this.users)
      },
      (error) => {
        console.log("Error en la llamada :" + error)
      });
  }
  modificarUsuario(id: any) {

  }
  eliminarUsuario(id: any) {

  }
}
