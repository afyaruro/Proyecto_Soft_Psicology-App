import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { AgendaService } from 'src/app/services/Agenda.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Agenda } from '../models/Agenda';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  agenda: Agenda;
  formGroup: FormGroup;
  usuarios : string[];
  user: string;
  constructor(private agendaService: AgendaService, private psicologoService: EmpleadoService,private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.buildForm();
  }
  private buildForm() {

    this.agenda = new Agenda();

    this.usuarios=this.psicologoService.getLocal();
    this.user=this.usuarios[0];
    this.agenda.idPsicologo = this.user;
    this.agenda.fechaDeseada ;
    this.agenda.horaCita = 'Hora Deseada';

    this.formGroup = this.formBuilder.group({
      idPsicologo: [this.agenda.idPsicologo, Validators.required],
      fechaDeseada: [this.agenda.fechaDeseada, Validators.required],
      horaCita: [this.agenda.horaCita, Validators.required],
    });
  }
  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }

  
  add() {
    this.agenda = this.formGroup.value;
    if(this.agenda.horaCita != 'Hora Deseada'){
    this.agendaService.post(this.agenda).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Agenda creada!!! :-)';

        this.agenda = p;
        
      }else{
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Error al crear la agenda!!! :-)';
      }
    

    });}
    else{
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Resultado Operación";
      messageBox.componentInstance.message = 'Seleccionar una Hora';
    }
  }
  get control() { return this.formGroup.controls;}

}
