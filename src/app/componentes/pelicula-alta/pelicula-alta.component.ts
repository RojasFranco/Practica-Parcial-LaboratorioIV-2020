import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { ManejadorPeliculasService } from 'src/app/servicios/manejador-peliculas.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  tiposPelicula = ["amor","terror","otros", "comedia"];
  tipoElegido: string;
  actorElegido: Actor;
  mostrarError: boolean = false;
  nombrePelicula: string;
  cantidadPublico: string;
  fechaEstreno: Date;
  mensajeError: string;
  claseMensaje: string;
  constructor(private service: FirebaseService, private prueba: ManejadorPeliculasService) { }

  ngOnInit(): void {
  }


  // ElegirTipo(tipo: string){
  //   alert(tipo);
  // }

  async AgregarPelicula(){
    this.mostrarError = false;
    if(!this.tipoElegido || !this.nombrePelicula || !this.cantidadPublico || !this.fechaEstreno){
      this.mostrarError = true;
      this.mensajeError = "Complete todos los campos";
      this.claseMensaje = "alert alert-danger";
    }
    else{      
      this.mostrarError = false;
      if(this.actorElegido){
        let pelicula = new Pelicula();
        pelicula.nombre = this.nombrePelicula;
        pelicula.tipo = this.tipoElegido;
        pelicula.cantidad_publico = parseInt(this.cantidadPublico);
        pelicula.fecha_estreno = this.fechaEstreno.toString();
        await this.GuardarPelicula(pelicula);
        
      }
      else{
        this.mostrarError = true;
        this.mensajeError = "Elija un actor";
        this.claseMensaje = "alert alert-danger";
      }
    }
  }

  CargarActor(actorElegido: Actor){
    this.actorElegido = actorElegido;
  }

  async GuardarPelicula(pelicula: Pelicula){
    let datoAgregar = {
      nombre: pelicula.nombre,
      fecha_estreno: pelicula.fecha_estreno,
      cantidad_publico: pelicula.cantidad_publico,
      tipo: pelicula.tipo,
      actor: {
        nombre: this.actorElegido.nombre,
        apellido: this.actorElegido.sexo,
        sexo: this.actorElegido.sexo,
        fecha_nacimiento: this.actorElegido.fecha_de_nacimiento
      }
    };
    await this.service.AgregarSinId("peliculas",datoAgregar);
    this.claseMensaje = "alert alert-success";
    this.mensajeError = "Pelicula creada correctamente";
    this.mostrarError = true;
  }
}
