import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCsvComponent } from './report-csv.component';

describe('ReportCsvComponent', () => {
  let component: ReportCsvComponent;
  let fixture: ComponentFixture<ReportCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
