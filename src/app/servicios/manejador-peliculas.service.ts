import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Actor } from '../clases/actor';
import { Pelicula } from '../clases/pelicula';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ManejadorPeliculasService {

  coleccion: string =  "peliculas";
  constructor(private bbdd: FirebaseService) { }

  ModificarColeccion(nombreColeccion: string){
    this.coleccion = nombreColeccion;
  }

  AgregarPelicula(pelicula: Pelicula){
    // this.bbdd.AgregarSinId(this.coleccion, pelicula);
    let peliculaAgregar={
      nombre: pelicula.nombre,
      tipo: pelicula.tipo,
      cantidad_publico: pelicula.cantidad_publico,
      fecha_estreno: pelicula.fecha_estreno,
      // foto: pelicula.foto
    };
    this.bbdd.AgregarSinId(this.coleccion, peliculaAgregar);
  }

  ActualizarPelicula(id: string, peliculaModificada: Pelicula){
    this.bbdd.ActualizarDato(this.coleccion, id, peliculaModificada);
  }

  BorrarPelicula(id: string){
    this.bbdd.BorrarDato(this.coleccion, id);
  }

  async ObtenerTodasLasPeliculas(){
    let listaRetornar = new Array<Pelicula>();
    (await this.bbdd.ObtenerTodos(this.coleccion)).forEach(elemento=>{
      let peliculaActual = new Pelicula();
      peliculaActual.id = elemento.id;
      peliculaActual.nombre = elemento.data().nombre;
      peliculaActual.cantidad_publico = parseInt(elemento.data().cantidad_publico);
      peliculaActual.fecha_estreno = elemento.data().fecha_estreno;
      peliculaActual.tipo = elemento.data().tipo;
      peliculaActual.foto = elemento.data().foto;
      listaRetornar.push(peliculaActual);
    })
    return listaRetornar;
  }
  
  async ObtenerUnaPelicula(id:string){
    let retorno;
    retorno = (await this.bbdd.ObtenerUno(this.coleccion, id)).data();
    return retorno; // VERIFICAAAAAAAAR    
  }

  async ObtenerTodasLosActores(){
    let listaRetornar = new Array<Actor>();
    (await this.bbdd.ObtenerTodos("actores")).forEach(elemento=>{
      let actorActual = new Actor();
      actorActual.id = elemento.id;
      actorActual.nombre = elemento.data().nombre;
      actorActual.apellido = elemento.data().apellido;
      actorActual.fecha_de_nacimiento = elemento.data().fecha_nacimiento;
      actorActual.sexo = elemento.data().sexo;
      actorActual.foto = elemento.data().foto;
      listaRetornar.push(actorActual);
    })
    return listaRetornar;
  }

}
