import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  peliculaSeleccionada: Pelicula;
  constructor() { }

  ngOnInit(): void {
  }

  ElegirPelicula(peliculaElegida){
    this.peliculaSeleccionada = peliculaElegida;
  }

}
