import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-modal-psicologo',
  templateUrl: './alert-modal-psicologo.component.html',
  styleUrls: ['./alert-modal-psicologo.component.css']
})
export class AlertModalPsicologoComponent implements OnInit {

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
  @Input() universidad;
@Input() finalizacion_estudios;
  @Input() experiencia;
@Input() area;

  ngOnInit(): void {
  }

}
