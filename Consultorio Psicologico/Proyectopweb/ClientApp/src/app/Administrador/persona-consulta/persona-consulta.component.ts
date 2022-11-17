import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { AlertModal2Component } from 'src/app/@base/modal/alert-modal2/alert-modal2.component';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {
  searchText:string;
  personas: Persona[];
  constructor(private personaService: PersonaService, private modalService: NgbModal) { }
  
  ngOnInit() {
    this.personaService.get().subscribe(result => {
      this.personas = result;
   });
  }

  detalles(paciente: Persona){
    const messageBox = this.modalService.open(AlertModal2Component)
        messageBox.componentInstance.title = "Paciente " + paciente.nombre +" " + paciente.apellido;
        messageBox.componentInstance.nombre = paciente.nombre;
        messageBox.componentInstance.apellido = paciente.apellido;
        messageBox.componentInstance.user = paciente.username;
        messageBox.componentInstance.pass = paciente.pass;
        messageBox.componentInstance.tipoidentidad = paciente.tipoDocumento;
        messageBox.componentInstance.identidad = paciente.identificacion;
        messageBox.componentInstance.sexo = paciente.sexo;
        messageBox.componentInstance.eps = paciente.eps;
        messageBox.componentInstance.fecha_nacimiento =paciente.fechaNacimiento;
        messageBox.componentInstance.telefono = paciente.telefono;
        messageBox.componentInstance.direccion = paciente.direccion;
        messageBox.componentInstance.correo = paciente.correo;
        
  }
}

