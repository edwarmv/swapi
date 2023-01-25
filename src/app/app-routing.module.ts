import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'starship',
    loadChildren: () => import('./starship/starship.module').then(m => m.StarshipModule)
  },
  {
    path: 'people',
    loadComponent: () => import('./people/people.component').then(c => c.PeopleComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
