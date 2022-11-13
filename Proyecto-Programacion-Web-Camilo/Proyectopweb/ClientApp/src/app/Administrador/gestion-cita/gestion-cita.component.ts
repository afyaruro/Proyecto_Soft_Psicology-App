import { Component, OnInit } from '@angular/core';
import { iif } from 'rxjs';
import { AgendaService } from 'src/app/services/Agenda.service';
import { CitaService } from 'src/app/services/apartar-citas.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Agenda } from '../models/Agenda';
import { Cita } from '../models/Cita';
import { Empleado } from '../models/empleado';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-gestion-cita',
  templateUrl: './gestion-cita.component.html',
  styleUrls: ['./gestion-cita.component.css']
})
export class GestionCitaComponent implements OnInit {
  cita: Cita;
  agendaHora: string[];
  agendaNombrePsicologo: string[];
  psicologos: Empleado[];
  fecha: Date;
  hora:string;
  usuarios: string[];
  user: string;
  nombreP: string;
  
  constructor(private pacienteService: PersonaService, private apartarCitasService: CitaService, private agendaService: AgendaService, ) { 
    this.cita = new Cita;
  }

    ngOnInit() {

    this.usuarios=this.pacienteService.getLocal();
    this.user=this.usuarios[0];
    this.cita.idPaciente = this.user;
    console.log(this.cita.idPaciente);

    
    }



    
    verificandoNombre(){
      console.log("ok");
        this.agendaService.getNombre(this.cita.horaCita).subscribe(result=>{

            this.agendaNombrePsicologo = result;  
            console.log(result);
            console.log("hola "+this.nombreP);
           
        });
       
    }

   verificando(){
     if(this.cita.fechaDeseada){
      this.agendaService.getHora(this.cita.fechaDeseada).subscribe(result=>{
        console.log(result);
          this.agendaHora = result;  
         
            
      });
     }
   }
      
    
    add(){
     this.cita.estado="Activa";
     this.cita.nombre = this.nombreP;
      this.apartarCitasService.post(this.cita).subscribe(p=>{
        console.log(p);
        if(p!=null){
          alert('Cita Apartada!');
          this.cita=p;
        }
      });
    }
}
