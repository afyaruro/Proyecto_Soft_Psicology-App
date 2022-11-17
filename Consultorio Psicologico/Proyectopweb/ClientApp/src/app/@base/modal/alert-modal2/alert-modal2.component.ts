import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-modal2',
  templateUrl: './alert-modal2.component.html',
  styleUrls: ['./alert-modal2.component.css']
})
export class AlertModal2Component implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() title;
  @Input() nombre;
@Input() apellido;
  @Input() user;
@Input() pass;
  @Input() tipoidentidad;
@Input() identidad;
  @Input() sexo;
@Input() eps;
  @Input() fecha_nacimiento;
@Input() telefono;
  @Input() direccion;
@Input() correo;

  ngOnInit(): void {
  }
}

