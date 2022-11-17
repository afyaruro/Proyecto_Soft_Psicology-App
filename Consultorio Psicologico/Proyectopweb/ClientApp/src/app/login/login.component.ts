import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../@base/alert-modal/alert-modal.component';
import { Empleado } from '../Administrador/models/empleado';
import { EmpleadoService } from '../services/empleado.service';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tipousuario = "Tipo de usuario";
  username: string;
  contra: string;
  psicologo : Empleado;
  psicologos : string[];

  constructor(private router: Router, private pacienteService: PersonaService,private empleadoService: EmpleadoService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  IngresarAdministrador(){
    this.router.navigate(["/menuAdministrador/registroEmpleado"]);
  }

  IngresarPsicologo(){
    this.router.navigate(["/menuEmpleado/RegistrarAgenda"]);
  }

  IngresarPaciente(){
    this.router.navigate(["/menuPaciente/AgendarCita"]);
  }


  Ingresar(){
    if (this.tipousuario === "Tipo de usuario"){
      alert("Seleccione un Usuario..");
   }
   else if (this.tipousuario === "2"){
    //admin
    if(this.username =="admin" && this.contra == "admin"){
    this.IngresarAdministrador();
  }
  else if(this.username !="admin"){
  alert("El usuario Administrador no existe");}else{
    alert("Contraseña Incorrecta");
  }
  //admin
  } 
  else if (this.tipousuario === "3"){
    //psicologo
    this.empleadoService.getPsicologo(this.username).subscribe(p=>{

      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Mensaje Validación"
      if(p!=null){
        
        if(p.password == this.contra){


          this.empleadoService.postLocal(p.username);

          this.IngresarPsicologo();
          messageBox.componentInstance.message = "Usuario Correcto"

        }else {
          messageBox.componentInstance.message = "contraseña incorrecta"
        }

        
      }else{
        messageBox.componentInstance.message = "No existe psicologo registrado con el nombre de usuario"
      }
    })
    //psicologo
  }
  
  else if (this.tipousuario === "1"){

    
    this.pacienteService.getPaciente(this.username).subscribe(p=>{

      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Mensaje Validación"
      if(p!=null){
        
        if(p.password === this.contra){
          this.pacienteService.postLocal(p.username);

          this.IngresarPaciente();
          messageBox.componentInstance.message = "Usuario Correcto"

        }else {
          messageBox.componentInstance.message = "contraseña incorrecta"
        }

        
      }else{
        messageBox.componentInstance.message = "No existe paciente registrado con el nombre de usuario"
      }
    })
    
    
  }
  
  }



 
}
