import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const routes: Routes = [
  {
    path: 'starship',
    loadChildren: () =>
      import('./starship/starship.module').then((m) => m.StarshipModule),
  },
  {
    path: 'people',
    component: ToolbarComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./people/people.component').then((c) => c.PeopleComponent),
      },
    ],
  },
  { path: '', redirectTo: 'starship', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
