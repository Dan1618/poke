import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { SinglePokeComponent } from './single-poke/single-poke.component';
import { SinglePokeResolverService } from './common/single-poke-resolver.service'

const routes: Routes = [
  {
    path: 'pokemon/:id',
    component: SinglePokeComponent,
    resolve: { pokeResolver : SinglePokeResolverService }
  },
  {
    path: 'pokemons',
    component: PokeListComponent
  },
  {
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
