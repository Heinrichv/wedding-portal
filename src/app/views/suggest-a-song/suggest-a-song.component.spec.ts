import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestASongComponent } from './suggest-a-song.component';

describe('SuggestASongComponent', () => {
  let component: SuggestASongComponent;
  let fixture: ComponentFixture<SuggestASongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestASongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestASongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
