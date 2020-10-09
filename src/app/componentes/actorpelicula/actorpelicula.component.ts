import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actorpelicula',
  templateUrl: './actorpelicula.component.html',
  styleUrls: ['./actorpelicula.component.css']
})
export class ActorpeliculaComponent implements OnInit {

  actorElegido: Actor;
  mostrarCampos: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  SeleccionarActor(actor: Actor){
    this.actorElegido = actor;
    this.mostrarCampos = true;
  }

}
