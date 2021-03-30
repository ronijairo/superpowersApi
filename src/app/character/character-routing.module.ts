import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent} from './components/character-list/character-list.component';
import {CharacterDetailComponent} from './components/character-detail/character-detail.component';

const routes: Routes = [
  {
    path:'',
    component:CharacterListComponent
  },
  {
    path:':id',
    component:CharacterDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
