import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private bdd: Storage = new Storage();
  private bddStatus: Promise<void>;
  /*
    ASYNC es una palabra que le dices a JavaScript cuando una función va a hacer algo que toma tiempo, 
    como obtener datos de una base de datos o esperar una respuesta de un servidor.

    Cuando una función está marcada como async, 
    significa que esa función promete (con una "promise") que eventualmente devolverá algo, pero no de inmediato.

    Las promise son resultados que pueden ser tanto positivo como negativo similar a Cumplido|Sin Cumplir

    await es como decirle a JavaScript: "Espera un segundo antes de continuar, hasta que termines lo que estás haciendo".

    Lo usas para esperar el resultado de algo que toma tiempo (como una promesa) 
    antes de seguir ejecutando el resto del código. 
    
    Solo puedes usar await dentro de funciones marcadas como async.
  */

  // Inicializar el almacenamiento
  constructor(private storage: Storage) {
    this.bddStatus = this.onInit();
  }
  async onInit(): Promise<void> {
    const storage = await this.storage.create();
    this.bdd = storage;
  }

  async BDDConectada(): Promise<void> {
    await this.bddStatus;
  }
  async get(key: string): Promise<any> {
    await this.BDDConectada()
    return this.bdd.get(key);
  }

  async set(key: string, valor: any): Promise<any> {
    await this.BDDConectada()
    return this.bdd.set(key, valor);
  }
  async remove(key: string) {
    await this.BDDConectada()
    this.bdd.remove(key);
  }
}
