import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingDateCountdownComponent } from './wedding-date-countdown.component';

describe('WeddingDateCountdownComponent', () => {
  let component: WeddingDateCountdownComponent;
  let fixture: ComponentFixture<WeddingDateCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingDateCountdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingDateCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
