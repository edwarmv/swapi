import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StarshipService } from '../services/starship.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {
  starships$: Observable<any> | undefined = undefined;
  total$: Observable<any> | undefined = undefined;
  constructor(private starshipService: StarshipService) {}

  ngOnInit(): void {
    this.starshipService.findStarships().subscribe(console.log);
    this.starships$ = this.starshipService.starships$;
    this.total$ = this.starshipService.total$;
  }

  addStarship(starship: any) {
    this.starshipService.addStarship(starship);
  }
}
