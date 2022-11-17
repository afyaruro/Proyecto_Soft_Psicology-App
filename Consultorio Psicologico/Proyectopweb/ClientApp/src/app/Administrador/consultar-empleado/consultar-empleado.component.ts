import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from '../models/empleado';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalPsicologoComponent } from 'src/app/@base/modal/alert-modal-psicologo/alert-modal-psicologo.component';

@Component({
  selector: 'app-consultar-empleado',
  templateUrl: './consultar-empleado.component.html',
  styleUrls: ['./consultar-empleado.component.css']
})
export class ConsultarEmpleadoComponent implements OnInit {
  empleados:Empleado[];
  searchText:string;
  constructor(private empleadoService: EmpleadoService,private modalService: NgbModal) { }

  ngOnInit() {
    this.empleadoService.get().subscribe(result => {
      this.empleados = result;
      
   });
  }

  detalles(persona:Empleado){
    const messageBox = this.modalService.open(AlertModalPsicologoComponent)

        messageBox.componentInstance.title = "Psicologo " + persona.nombre +" " + persona.apellido;
        messageBox.componentInstance.nombre = persona.nombre;
        messageBox.componentInstance.apellido = persona.apellido;
        messageBox.componentInstance.user = persona.username;
        messageBox.componentInstance.pass = persona.pass;
        messageBox.componentInstance.tipoidentidad = persona.tipoDocumento;
        messageBox.componentInstance.identidad = persona.identificacion;
        messageBox.componentInstance.sexo = persona.sexo;
        messageBox.componentInstance.eps = persona.eps;
        messageBox.componentInstance.fecha_nacimiento = persona.fechaNacimiento;
        messageBox.componentInstance.telefono = persona.telefono;
        messageBox.componentInstance.direccion = persona.direccion;
        messageBox.componentInstance.correo = persona.correo;
        messageBox.componentInstance.universidad = persona.Universidad;
        messageBox.componentInstance.area = persona.areaEspecializada;
        messageBox.componentInstance.experiencia = persona.mesesExperiencia;
        messageBox.componentInstance.finalizacion_estudios = persona.fechaFinalizacion;
  }
}
