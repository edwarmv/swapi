import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  take,
} from 'rxjs';
import { StarshipsResult, Starships } from '../starship/starship.model';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  url = 'https://swapi.dev/api/starships';
  starshipMap = new Map();
  starshipsSubject = new BehaviorSubject<StarshipsResult[]>([]);
  starships$ = this.starshipsSubject.asObservable();
  totalSubject = new BehaviorSubject<number>(0);
  total$ = this.totalSubject.asObservable();

  constructor(private http: HttpClient) {

    this._findStarships(this.url);
  }

  findStarships(): Observable<any> {
    return this.http.get(this.url);
  }

  _findStarships(url: string) {
    this.http
      .get<Starships>(url)
      .pipe(take(1))
      .subscribe(({ next, results, count }) => {
        this.starshipsSubject.next([...this.starshipsSubject.value, ...results])
        this.totalSubject.next(count);
        if (next) {
          this._findStarships(next);
        }
      });
  }

  addStarship(starship: any) {
    this.starshipMap.set(starship.url, starship);
  }

  removeStarship(starship: any) {
    this.starshipMap.delete(starship.url);
  }

  filterStarshipMap(filter: string) {
    this.starshipMap = new Map(
      Array.from(this.starshipMap).filter(([key, value]) =>
        value.name.toLowerCase().includes(filter)
      )
    );
    // this.starshipMap.values;
    // console.log(this.starshipMap.values())
    // const starship = new Map(this.starshipMap);
    console.log(this.starshipMap);
  }
}
