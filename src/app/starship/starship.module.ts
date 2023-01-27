import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipComponent } from './starship.component';
import { Route, RouterModule } from '@angular/router';
import { FavoriteStarshipComponent } from './favorite-starship/favorite-starship.component';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

const routes: Route[] = [
  {
    path: '',
    component: ToolbarComponent,
    children: [
      { path: '', component: StarshipComponent },
      { path: 'favorites', component: FavoriteStarshipComponent }
    ],
  },
];

@NgModule({
  declarations: [StarshipComponent, FavoriteStarshipComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
  ],
})
export class StarshipModule {}
