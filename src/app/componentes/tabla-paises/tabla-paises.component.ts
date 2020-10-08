import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  listadoPaises: any;
  @Output() eventoElegirPais: EventEmitter<any> = new EventEmitter();
  constructor(private paises: PaisesService) { 
  }

  ngOnInit(): void {
    this.paises.ObtenerPaises().subscribe(rta=>{
      this.listadoPaises = rta;      
    });
  }

  SeleccionarPais(paisElegido){
    this.eventoElegirPais.emit(paisElegido);
  }

}
