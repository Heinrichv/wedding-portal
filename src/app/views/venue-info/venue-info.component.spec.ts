import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueInfoComponent } from './venue-info.component';

describe('VenueInfoComponent', () => {
  let component: VenueInfoComponent;
  let fixture: ComponentFixture<VenueInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
