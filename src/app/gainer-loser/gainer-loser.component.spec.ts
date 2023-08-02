import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GainerLoserComponent } from './gainer-loser.component';

describe('GainerLoserComponent', () => {
  let component: GainerLoserComponent;
  let fixture: ComponentFixture<GainerLoserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GainerLoserComponent]
    });
    fixture = TestBed.createComponent(GainerLoserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
