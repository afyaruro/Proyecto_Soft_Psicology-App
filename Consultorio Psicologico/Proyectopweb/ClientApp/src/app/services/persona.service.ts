import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Persona } from '../Administrador/models/persona';
import { of } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Paciente } from '../Administrador/models/Paciente';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }

  getLocal(): string[] {
    return JSON.parse(localStorage.getItem('username'));
    }
    postLocal(username: string) {
    let usernames: string[] = [];
    if (this.getLocal() != null) {
      this.deleteLocal();
    }
    usernames.push(username);
    localStorage.setItem('username', JSON.stringify(usernames));
    }

    deleteLocal(){
      localStorage.clear();
    }

  get(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.baseUrl + 'api/Paciente')
      .pipe(
        tap(_ => this.handleErrorService.log(_.toString())),
        catchError(this.handleErrorService.handleError<Persona[]>('Consulta Persona', null))
      );
  }
  getPaciente(user: string){
    
    return this.http.get<Paciente>(this.baseUrl + 'api/Paciente/GetId?username='+user)
    .pipe(
      //tap(_ => this.handleErrorService.log('Psicologo ')),
      catchError(this.handleErrorService.handleError<Paciente>('Consulta Pacientes', null))
    );
  } 
  post(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.baseUrl + 'api/Paciente', persona)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Persona>('Registrar Persona', null))
      );
  }
}
