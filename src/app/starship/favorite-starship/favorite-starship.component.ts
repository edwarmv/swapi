import { Component } from '@angular/core';
import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'app-favorite-starship',
  templateUrl: './favorite-starship.component.html',
  styleUrls: ['./favorite-starship.component.scss']
})
export class FavoriteStarshipComponent {
  filterText = '';
  starshipCp = new Map();

  constructor(public starshipService: StarshipService) {}

  removeStarship(starship: any) {
    this.starshipService.removeStarship(starship);
  }

  onFilterChange(filter: any) {
      this.starshipService.filterStarshipMap(filter);
  }

  onFocus() {
    this.starshipCp = new Map(this.starshipService.starshipMap);
  }

  clear() {
    this.starshipService.starshipMap = new Map(this.starshipCp);
    this.filterText = '';
  }
}
