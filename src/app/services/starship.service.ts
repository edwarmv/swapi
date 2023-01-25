import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  take,
  takeWhile,
} from 'rxjs';
import { Result, Starships } from '../starship/starship.model';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  url = 'https://swapi.dev/api/starships';
  starshipMap = new Map();
  starshipsSubject = new BehaviorSubject<Result[]>([]);
  starships$ = this.starshipsSubject.asObservable();
  totalSubject = new BehaviorSubject<number>(0);
  total$ = this.totalSubject.asObservable();

  constructor(private http: HttpClient) {

    this._findStarships(this.url);
  }

  findStarships(): Observable<any> {
    // const starships = new BehaviorSubject(null);
    // this.http
    //   .get<Starships>(this.url)
    //   .pipe(
    //     mergeMap(({ next }) => this.http.get<Starships>(next)),
    //     // takeWhile(({ next }) => next !== null)
    //   )
    //   .subscribe(console.log);
    return this.http.get(this.url);
  }

  _findStarships(url: string) {
    this.http
      .get<Starships>(url)
      .pipe(take(1))
      .subscribe(({ next, previous, results, count }) => {
        console.log({ next, previous, results });
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
