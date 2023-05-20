import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NastyCardComponent } from './nasty-card.component';

describe('NastyCardComponent', () => {
  let component: NastyCardComponent;
  let fixture: ComponentFixture<NastyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NastyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NastyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
