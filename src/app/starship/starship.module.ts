import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipComponent } from './starship.component';
import { Route, RouterModule } from '@angular/router';
import { FavoriteStarshipComponent } from './favorite-starship/favorite-starship.component';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
    { path: '', component: StarshipComponent, children: [ { path: 'favorites', component: FavoriteStarshipComponent}] }
];

@NgModule({
  declarations: [
    StarshipComponent,
    FavoriteStarshipComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class StarshipModule { }
