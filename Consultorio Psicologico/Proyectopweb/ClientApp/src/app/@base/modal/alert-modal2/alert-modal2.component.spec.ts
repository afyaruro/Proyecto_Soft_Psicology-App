import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertModal2Component } from './alert-modal2.component';

describe('AlertModal2Component', () => {
  let component: AlertModal2Component;
  let fixture: ComponentFixture<AlertModal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertModal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
