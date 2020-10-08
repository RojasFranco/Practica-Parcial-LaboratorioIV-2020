import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ManejadorPeliculasService } from 'src/app/servicios/manejador-peliculas.service';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {

  @Input() actorElegido: Actor;
  @Input() permitirBorrado: boolean = false;
  @Output() eventoBorrarHecho: EventEmitter<boolean> = new EventEmitter();
  constructor(private service: ManejadorPeliculasService) { }

  ngOnInit(): void {
  }

  BorrarActor(){
    this.service.BorrarActor(this.actorElegido.id);
    this.eventoBorrarHecho.emit(true);
  }

}
