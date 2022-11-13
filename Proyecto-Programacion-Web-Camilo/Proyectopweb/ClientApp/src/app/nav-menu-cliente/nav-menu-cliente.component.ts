import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../@base/alert-modal/alert-modal.component';
import { EmpleadoService } from '../services/empleado.service';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-nav-menu-cliente',
  templateUrl: './nav-menu-cliente.component.html',
  styleUrls: ['./nav-menu-cliente.component.css']
})
export class NavMenuClienteComponent implements OnInit {

  constructor(private router: Router, private personaService: PersonaService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  Salir(){
    const messageBox = this.modalService.open(AlertModalComponent)
    messageBox.componentInstance.title = "Cerrar Sesion"
    messageBox.componentInstance.message = "Usted ha cerrado sesión"
    this.personaService.deleteLocal();
    this.router.navigate(["/login"]);
  }

}
