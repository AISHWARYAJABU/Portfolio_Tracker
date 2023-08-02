import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSecurityandPrivacyComponent } from './data-securityand-privacy.component';

describe('DataSecurityandPrivacyComponent', () => {
  let component: DataSecurityandPrivacyComponent;
  let fixture: ComponentFixture<DataSecurityandPrivacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSecurityandPrivacyComponent]
    });
    fixture = TestBed.createComponent(DataSecurityandPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
