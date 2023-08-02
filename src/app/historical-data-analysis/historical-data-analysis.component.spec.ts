import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalDataAnalysisComponent } from './historical-data-analysis.component';

describe('HistoricalDataAnalysisComponent', () => {
  let component: HistoricalDataAnalysisComponent;
  let fixture: ComponentFixture<HistoricalDataAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricalDataAnalysisComponent]
    });
    fixture = TestBed.createComponent(HistoricalDataAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
