import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelUpdateComponent } from './hotel-update.component';

describe('HotelUpdateComponent', () => {
  let component: HotelUpdateComponent;
  let fixture: ComponentFixture<HotelUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelUpdateComponent]
    });
    fixture = TestBed.createComponent(HotelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
