import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ManejadorPeliculasService } from 'src/app/servicios/manejador-peliculas.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  listaActores: Array<Actor>;
  @Output() eventoSeleccionarActor: EventEmitter<Actor> = new EventEmitter();
  constructor(private service: ManejadorPeliculasService) { }

  async ngOnInit(){
    this.listaActores = await this.service.ObtenerTodasLosActores();
  }

  SeleccionarActor(actorElegido: Actor){
    this.eventoSeleccionarActor.emit(actorElegido);
  }
}
