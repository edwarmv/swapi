import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, mergeMap, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  url = 'https://swapi.dev/api/starships';
  starshipMap = new Map();
  starshipMapCp = new Map();

  constructor(private http: HttpClient) { }

  findStarships(): Observable<any> {
    const starships = new BehaviorSubject(null);
    this.http.get<any>(this.url).pipe(
      mergeMap(({next}) => {
        if (next) {
          return this.http.get<any>(next)
        } else {
          of()
        }
      })
    )
    return this.http.get(this.url);
  }

  addStarship(starship: any) {
    this.starshipMap.set(starship.url, starship);
  }

  removeStarship(starship: any) {
    this.starshipMap.delete(starship.url);
  }

  filterStarshipMap(filter: string) {

    this.starshipMap = new Map(
      Array.from(this.starshipMap).filter(([key, value]) => value.name.toLowerCase().includes(filter))
    )
    // this.starshipMap.values;
    // console.log(this.starshipMap.values())
    // const starship = new Map(this.starshipMap);
    console.log(this.starshipMap)
  }
}
