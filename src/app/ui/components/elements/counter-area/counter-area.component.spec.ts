import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAreaComponent } from './counter-area.component';

describe('CounterAreaComponent', () => {
  let component: CounterAreaComponent;
  let fixture: ComponentFixture<CounterAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CounterAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
