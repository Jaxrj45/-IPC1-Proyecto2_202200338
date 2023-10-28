import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url: string = "//localhost:3001"

  constructor(private http: HttpClient) { }

  registroPaciente(paciente: any): Observable<any> {
    let params = JSON.stringify(paciente)
    console.log(params);
    let direccion = this.url + "/paciente/guardar-Paciente"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(direccion, params,{ headers: headers });
  }



}
