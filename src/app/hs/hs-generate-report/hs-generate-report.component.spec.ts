import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsGenerateReportComponent } from './hs-generate-report.component';

describe('HsGenerateReportComponent', () => {
  let component: HsGenerateReportComponent;
  let fixture: ComponentFixture<HsGenerateReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsGenerateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsGenerateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
