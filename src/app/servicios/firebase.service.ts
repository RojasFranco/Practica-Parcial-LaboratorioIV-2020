import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  ObtenerTodos(coleccion:string){
    return this.firestore.collection(coleccion).get().toPromise();
  }

  ObtenerTodosTiempoReal(coleccion:string){
    return this.firestore.collection(coleccion).snapshotChanges();
  }

  ObtenerUno(coleccion:string, key: string){
    return this.firestore.collection(coleccion).doc(key).get().toPromise();
  }

  AgregarConId(coleccion: string, key:string, datoAgregar){
    return this.firestore.collection(coleccion).doc(key).set(datoAgregar);
  }

  AgregarSinId(coleccion: string, datoAgregar){
    return this.firestore.collection(coleccion).add(datoAgregar);
  }

  ActualizarDato(coleccion: string, key:string, datoACtualizado){
    return this.firestore.collection(coleccion).doc(key).update(datoACtualizado);
  }

  BorrarDato(coleccion: string, key:string){
    return this.firestore.collection(coleccion).doc(key).delete();
  }
}
