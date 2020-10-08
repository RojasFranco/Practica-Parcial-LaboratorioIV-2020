import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  nombreActor: string;
  apellido: string;
  fecha_nacimiento: string;
  sexoDisponible = ["masculino", "femenino"];
  sexoElegido: string;
  mensajeError: string;
  claseMensaje: string;
  mostrarError: boolean = false;
  paisElegido: any;
  constructor(private service: FirebaseService) { }

  ngOnInit(): void {
  }

  async AgregarActor(){
    this.mostrarError = false;
    if(!this.sexoElegido || !this.nombreActor || !this.apellido || !this.fecha_nacimiento){
      this.mostrarError = true;
      this.mensajeError = "Complete todos los campos";
      this.claseMensaje = "alert alert-danger";
    }
    else{      
      this.mostrarError = false;
      if(this.paisElegido){
        let actor = new Actor();
        actor.nombre = this.nombreActor;
        actor.apellido = this.apellido;
        actor.sexo = this.sexoElegido;
        actor.fecha_de_nacimiento = this.fecha_nacimiento.toString();
        await this.GuardarActor(actor);
        
      }
      else{
        this.mostrarError = true;
        this.mensajeError = "Elija un pais";
        this.claseMensaje = "alert alert-danger";
      }
    }
  }

  ElegirPais(paiselegido){
    this.paisElegido = paiselegido;
  }

  async GuardarActor(actor: Actor){
    let datoAgregar = {
      nombre: actor.nombre,
      apellido: actor.apellido,
      fecha_nacimiento: actor.fecha_de_nacimiento,
      sexo: actor.sexo,
      pais: {
        pais: this.paisElegido.name,
        capital: this.paisElegido.capital
      }
    };
    await this.service.AgregarSinId("actores",datoAgregar);
    this.claseMensaje = "alert alert-success";
    this.mensajeError = "Actor creado correctamente";
    this.mostrarError = true;
  }
}
