import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { ManejadorPeliculasService } from 'src/app/servicios/manejador-peliculas.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  peliculaSeleccionada: Pelicula;
  mostrarMje: boolean = false;
  constructor(private service: ManejadorPeliculasService) { }

  ngOnInit(): void {
  }

  ElegirPelicula(pelicula: Pelicula){
    this.peliculaSeleccionada = pelicula;
  }

  EliminarPelicula(peliculaBorrar: Pelicula){
    this.service.BorrarPelicula(peliculaBorrar.id);
    this.mostrarMje = true;
  }

}
