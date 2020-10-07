import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaCargada: Pelicula; 
  @Output() eventoBorrarPelicula: EventEmitter<Pelicula> = new EventEmitter();
  @Input() borradoHabilitado: number;
  constructor() { }

  ngOnInit(): void {
  }

  BorrarPelicula(){
    this.eventoBorrarPelicula.emit(this.peliculaCargada);
  }

}
