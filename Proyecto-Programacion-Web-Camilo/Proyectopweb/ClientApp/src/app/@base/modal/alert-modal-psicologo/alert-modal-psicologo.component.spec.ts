import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertModalPsicologoComponent } from './alert-modal-psicologo.component';

describe('AlertModalPsicologoComponent', () => {
  let component: AlertModalPsicologoComponent;
  let fixture: ComponentFixture<AlertModalPsicologoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertModalPsicologoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertModalPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
