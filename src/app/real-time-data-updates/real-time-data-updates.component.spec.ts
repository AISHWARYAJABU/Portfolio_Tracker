import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeDataUpdatesComponent } from './real-time-data-updates.component';

describe('RealTimeDataUpdatesComponent', () => {
  let component: RealTimeDataUpdatesComponent;
  let fixture: ComponentFixture<RealTimeDataUpdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealTimeDataUpdatesComponent]
    });
    fixture = TestBed.createComponent(RealTimeDataUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
