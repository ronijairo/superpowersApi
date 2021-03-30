import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent} from './layout/layout.component';
import { CharacterModule } from './character/character.module';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'character',
        pathMatch:'full'
      },
      {
        path:'',
        loadChildren:()=> import('./character/character.module').then(m => CharacterModule)
      }
    ]
  },
  {
    path:'**',
    loadChildren:()=> import('./character/character.module').then(m => CharacterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
