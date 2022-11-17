
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PersonaConsultaComponent } from './Administrador/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './Administrador/persona-registro/persona-registro.component';
import { RegistroEmpladosComponent } from './Administrador/registro-emplados/registro-emplados.component';
import { GestionCitaComponent } from './Administrador/gestion-cita/gestion-cita.component';
import { ConsultarEmpleadoComponent } from './Administrador/consultar-empleado/consultar-empleado.component';
import { ConsultarCitasComponent } from './Administrador/consultar-citas/consultar-citas.component';
import { NavMenuEmpleadoComponent } from './nav-menu-empleado/nav-menu-empleado.component';
import { NavMenuClienteComponent } from './nav-menu-cliente/nav-menu-cliente.component';
import { FiltroPacientePipe } from './pipe/filtro-paciente.pipe';
import { FiltroPsicologoPipe } from './pipe/filtro-psicologo.pipe';
import { FiltroCitaPipe } from './pipe/filtro-cita.pipe';
import { LoginComponent } from './login/login.component';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { AgendaComponent } from './Administrador/agenda/agenda.component';
import { ConsultarAgendaComponent } from './Administrador/consultar-agenda/consultar-agenda.component';
import { AlertModal2Component } from './@base/modal/alert-modal2/alert-modal2.component';
import { AlertModalPsicologoComponent } from './@base/modal/alert-modal-psicologo/alert-modal-psicologo.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PersonaConsultaComponent,
    PersonaRegistroComponent,
    RegistroEmpladosComponent,
    GestionCitaComponent,
    ConsultarEmpleadoComponent,
    ConsultarCitasComponent,
    NavMenuEmpleadoComponent,
    NavMenuClienteComponent,
    FiltroPacientePipe,
    FiltroPsicologoPipe,
    FiltroCitaPipe,
    LoginComponent,
    AlertModalComponent,
    AgendaComponent,
    ConsultarAgendaComponent,
    AlertModal2Component,
    AlertModalPsicologoComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'personaRegistro', component: PersonaRegistroComponent },


      {
        path: 'menuAdministrador', component: NavMenuComponent,
        children: [
          { path: 'personaConsulta', component: PersonaConsultaComponent },
          { path: 'registroEmpleado', component: RegistroEmpladosComponent },
          { path: 'consultarEmpleado', component: ConsultarEmpleadoComponent },

        ]
      },

      { path: 'login', component: LoginComponent },

      {
        path: 'menuEmpleado', component: NavMenuEmpleadoComponent,
        children: [
          { path: 'RegistrarAgenda', component: AgendaComponent },
          { path: 'ConsultarAgenda', component: ConsultarAgendaComponent },
        ]
      },

      {
        path: 'menuPaciente', component: NavMenuClienteComponent,
        children: [
          { path: 'AgendarCita', component: GestionCitaComponent },
          { path: 'consultarCitas', component: ConsultarCitasComponent },
          
        ]
        
      },
      { path: '', redirectTo: '/login', pathMatch: 'full' }
    ])
  ],
  entryComponents:[AlertModalComponent, AlertModal2Component, AlertModalPsicologoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
