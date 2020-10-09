import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { ManejadorPeliculasService } from 'src/app/servicios/manejador-peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  listadoPeliculas: Array<Pelicula>;
  @Input() actorPedido: Actor;
  @Output() eventElegirPelicula: EventEmitter<Pelicula> = new EventEmitter();
  constructor(private service: ManejadorPeliculasService, private bd: FirebaseService) { 
    this.listadoPeliculas = new Array<Pelicula>();
  }

  async ngOnInit(){
    // this.listadoPeliculas = await this.service.ObtenerTodasLasPeliculas(); ESTO ANDA PERO NO EN TIEMPO REAL 
    this.bd.ObtenerTodosTiempoReal("peliculas").subscribe(snap=>{
      this.listadoPeliculas = [];
      snap.forEach(elemento => {
        let peliculaActual = new Pelicula();
        peliculaActual.id = elemento.payload.doc.id;
        peliculaActual.nombre = elemento.payload.doc.get("nombre");
        peliculaActual.cantidad_publico = parseInt(elemento.payload.doc.get("cantidad_publico"));
        peliculaActual.fecha_estreno = elemento.payload.doc.get("fecha_estreno");
        peliculaActual.tipo = elemento.payload.doc.get("tipo");
        peliculaActual.foto = elemento.payload.doc.get("foto");
        this.listadoPeliculas.push(peliculaActual);
      });
    });
    
  }

  SeleccionarPelicula(peliculaSeleccionada){
    this.eventElegirPelicula.emit(peliculaSeleccionada);
  }
}
