import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { ManejadorPeliculasService } from 'src/app/servicios/manejador-peliculas.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  listaActores: Array<Actor>;
  @Output() eventoSeleccionarActor: EventEmitter<Actor> = new EventEmitter();
  constructor(private service: ManejadorPeliculasService, private bd: FirebaseService) { }

  async ngOnInit(){
    // this.listaActores = await this.service.ObtenerTodasLosActores();

    this.bd.ObtenerTodosTiempoReal("actores").subscribe(snap=>{
      this.listaActores = [];
      snap.forEach(elemento => {
        let actorActual = new Actor();
        actorActual.id = elemento.payload.doc.id;
        actorActual.nombre = elemento.payload.doc.get("nombre");
        actorActual.apellido = elemento.payload.doc.get("apellido");
        actorActual.sexo = elemento.payload.doc.get("sexo");
        actorActual.fecha_de_nacimiento = elemento.payload.doc.get("fecha_nacimiento");
        actorActual.foto = elemento.payload.doc.get("foto");
        this.listaActores.push(actorActual);
      });
    });
  }

  SeleccionarActor(actorElegido: Actor){
    this.eventoSeleccionarActor.emit(actorElegido);
  }
}
