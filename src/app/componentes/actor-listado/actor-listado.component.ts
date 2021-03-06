import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  actorElegido: Actor;
  mostrarCampos:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  SeleccionarActor(actor: Actor){
    this.actorElegido = actor;
    this.mostrarCampos = true;
  }

  actualizar(recibido: boolean){
    this.mostrarCampos = false;
  }

}
