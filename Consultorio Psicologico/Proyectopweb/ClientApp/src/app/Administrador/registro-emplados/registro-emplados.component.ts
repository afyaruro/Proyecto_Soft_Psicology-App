import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-registro-emplados',
  templateUrl: './registro-emplados.component.html',
  styleUrls: ['./registro-emplados.component.css']
})
export class RegistroEmpladosComponent implements OnInit {
empleado:Empleado;
sexo="Selecciona un sexo";
tipoDocumento = "Selecciona el Tipo de Documento";
areaEspecializada = "Selecciona un area Especializada";
eps = "Seleccione su Eps"
empleados: Empleado[];
  constructor(private empleadoService: EmpleadoService, private modalService: NgbModal) { }

  ngOnInit() {
    this.empleado= new Empleado;
    this.empleado.sexo = this.sexo;
    this.empleado.tipoDocumento = this.tipoDocumento;
    this.empleado.areaEspecializada = this.areaEspecializada;
    this.empleado.eps = this.eps;
  }
  add(){
    this.empleadoService.post(this.empleado).subscribe(p=>{
     
      
      if(this.empleado.tipoDocumento === "Selecciona el Tipo de Documento" ){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Completar Todos los Campos"
        messageBox.componentInstance.message = "Seleccionar un tipo de documento"

      } else if(this.empleado.sexo === "Selecciona un sexo"){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Completar Todos los Campos"
        messageBox.componentInstance.message = "Seleccionar un sexo"

      }else if(this.empleado.eps === "Seleccione su Eps"){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Completar Todos los Campos"
        messageBox.componentInstance.message = "Seleccionar su Eps"

      } else if(this.empleado.areaEspecializada === "Selecciona un area Especializada"){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Completar Todos los Campos"
        messageBox.componentInstance.message = "Seleccionar un Area de Especializacion"

      } else if(p!=null ){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Completar Todos los Campos"
        messageBox.componentInstance.title = "Psicologo Creado"
        messageBox.componentInstance.message = "Psicologo creado con exito"
        this.empleado=p;
      }
      
    });
  }
}
