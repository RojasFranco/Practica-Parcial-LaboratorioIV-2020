import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { ActorComponent } from './componentes/actor/actor.component';
import { ActorpeliculaComponent } from './componentes/actorpelicula/actorpelicula.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';

const routes: Routes = [
  { path: 'bienvenido', component: BienvenidoComponent},
  {path : 'busqueda', component: BusquedaComponent},
  {path: 'peliculas', component: PeliculasComponent,
    children: [
      {path: 'alta', component: PeliculaAltaComponent},
      {path: 'listado', component: PeliculaListadoComponent}
  ]},
  {path: 'actor', component: ActorComponent,
    children: [
      { path: 'alta', component: ActorAltaComponent},
      {path: 'listado', component: ActorListadoComponent},
      {path: 'actorpelicula', component: ActorpeliculaComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
