import { Component, OnInit } from '@angular/core';
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
empleados: Empleado[];
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleado= new Empleado;
    this.empleado.sexo = this.sexo;
    this.empleado.tipoDocumento = this.tipoDocumento;
    this.empleado.areaEspecializada = this.areaEspecializada;
  }
  add(){
    this.empleadoService.post(this.empleado).subscribe(p=>{
      if(p!=null){
        alert('psicologo Creado!');
        this.empleado=p;
      }
      
      if(p==null){
        alert('Error al intentar guardar al paciente');
      }
    });
  }
}
