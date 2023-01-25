import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { People, PeopleResult } from '../people/people.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  url = 'https://swapi.dev/api/people';
  peopleSubject = new BehaviorSubject<PeopleResult[]>([]);
  peopleFetched = new Subject<void>();
  people$ = this.peopleSubject
    .asObservable();
  private peopleCache: PeopleResult[] = [];
  totalSubject = new BehaviorSubject<number>(0);
  total$ = this.totalSubject.asObservable();

  constructor(private http: HttpClient) {}

  findPeople() {
    this.peopleSubject.next([]);
    this.fetchAllPeople(this.url);
  }

  private fetchAllPeople(url: string) {
    this.http.get<People>(url).subscribe(({ next, results, count }) => {
      this.peopleCache = [...this.peopleCache, ...results];
      if (next) {
        console.log(this.peopleCache)
        this.fetchAllPeople(next);
      } else {
        this.peopleSubject.next(this.peopleCache);
        this.totalSubject.next(count);
      }
    });
  }
}
