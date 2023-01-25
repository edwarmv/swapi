import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteStarshipComponent } from './favorite-starship.component';

describe('FavoriteStarshipComponent', () => {
  let component: FavoriteStarshipComponent;
  let fixture: ComponentFixture<FavoriteStarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteStarshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
