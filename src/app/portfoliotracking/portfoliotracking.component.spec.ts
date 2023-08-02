import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliotrackingComponent } from './portfoliotracking.component';

describe('PortfoliotrackingComponent', () => {
  let component: PortfoliotrackingComponent;
  let fixture: ComponentFixture<PortfoliotrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfoliotrackingComponent]
    });
    fixture = TestBed.createComponent(PortfoliotrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
