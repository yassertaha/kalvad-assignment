import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBookMenuComponent } from './favorite-book-menu.component';

describe('FavoriteBookMenuComponent', () => {
  let component: FavoriteBookMenuComponent;
  let fixture: ComponentFixture<FavoriteBookMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteBookMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBookMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
