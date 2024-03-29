import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
persona: Persona;
sexo="Seleccione su sexo";
tipoDocumento = "Tipo de Documento";
eps = "Seleccione su Eps"

  constructor(private personaService: PersonaService,private modalService: NgbModal) { }

  ngOnInit() {
    this.persona= new Persona();
    this.persona.sexo=this.sexo;
    this.persona.eps=this.eps;
    this.persona.tipoDocumento=this.tipoDocumento;

  }

  add(){
    this.personaService.post(this.persona).subscribe(p=>{
      if(p!=null){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Persona creada!!! :-)';
        this.persona=p;
      }
      
    });
  }

}
