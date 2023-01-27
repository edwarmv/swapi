import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
    canMatch: [LoginGuard],
  },
  {
    path: 'starship',
    loadChildren: () =>
      import('./starship/starship.module').then((m) => m.StarshipModule),
    canMatch: [AuthGuard],
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
    canMatch: [AuthGuard],
  },
  { path: '', redirectTo: 'starship', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
