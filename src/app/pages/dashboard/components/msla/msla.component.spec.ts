import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslaComponent } from './msla.component';

describe('MslaComponent', () => {
  let component: MslaComponent;
  let fixture: ComponentFixture<MslaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
