import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { PeopleService } from '../services/people.service';
import { Vehicle } from '../vehicle/vehicle.model';
import { Cm2FtPipe } from './cm2foot.pipe';
import { PeopleResult } from './people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  standalone: true,
  imports: [CommonModule, Cm2FtPipe, MatButtonModule],
})
export class PeopleComponent {
  private peopleSubject = new BehaviorSubject<
    (PeopleResult & { vehicles$: Observable<string>[] })[]
  >([]);
  people$ = this.peopleSubject.asObservable();
  people: (PeopleResult & { vehicles$: Observable<string>[] })[] = [];
  skip = 0;
  take = 15;
  total = 0;
  constructor(private peopleService: PeopleService, private http: HttpClient) {
    this.peopleService.findPeople();
    this.peopleService.people$.subscribe((people) => {
      console.log(people);
      this.people = people.map((people) => ({
        ...people,
        vehicles$: people.vehicles.map((vehicle) => this.getVehicle(vehicle)),
      }));
      this.peopleSubject.next(this.people.slice(this.skip, this.take));
    });
    this.peopleService.total$.subscribe((total) => {
      this.total = total;
    });
  }

  prev() {
    this.skip -= this.take;
    this.peopleSubject.next(
      this.people.slice(this.skip, this.skip + this.take)
    );
  }

  next() {
    this.skip += this.take;
    this.peopleSubject.next(
      this.people.slice(this.skip, this.skip + this.take)
    );
  }

  getVehicle(url: string): Observable<string> {
    return this.http.get<Vehicle>(url).pipe(
      map((res) => {
        console.log(res);
        return res.name;
      })
    );
  }
}
