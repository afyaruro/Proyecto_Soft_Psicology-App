import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../@base/alert-modal/alert-modal.component';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-nav-menu-empleado',
  templateUrl: './nav-menu-empleado.component.html',
  styleUrls: ['./nav-menu-empleado.component.css']
})
export class NavMenuEmpleadoComponent implements OnInit {

  

  constructor(private router: Router, private empleadoService: EmpleadoService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  Salir(){
    const messageBox = this.modalService.open(AlertModalComponent)
    messageBox.componentInstance.title = "Cerrar Sesion"
    messageBox.componentInstance.message = "Usted ha cerrado sesión"
    this.empleadoService.deleteLocal();
    this.router.navigate(["/login"]);
  }
  
}
