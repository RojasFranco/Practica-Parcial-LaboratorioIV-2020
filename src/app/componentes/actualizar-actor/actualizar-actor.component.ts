import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ManejadorPeliculasService } from 'src/app/servicios/manejador-peliculas.service';

@Component({
  selector: 'app-actualizar-actor',
  templateUrl: './actualizar-actor.component.html',
  styleUrls: ['./actualizar-actor.component.css']
})
export class ActualizarActorComponent implements OnInit {

  @Output() eventoModificarHecho: EventEmitter<boolean> = new EventEmitter();
  @Input() actorElegido: Actor;
  nombre: string;
  apellido:string;
  sexo:string;
  fecha_nacimiento: string;
  nacionalidad: string;
  constructor(private service: ManejadorPeliculasService) { }

  ngOnInit(): void {
  }

  Modificar(){
    this.actorElegido.nombre = this.nombre;
    this.actorElegido.apellido = this.apellido;
    this.actorElegido.sexo = this.sexo;
    this.actorElegido.fecha_de_nacimiento = this.fecha_nacimiento.toString();
    this.actorElegido.nacionalidad = this.nacionalidad;
    this.service.ActualizarActor(this.actorElegido.id,this.actorElegido);
    this.eventoModificarHecho.emit(true);
  }
}
