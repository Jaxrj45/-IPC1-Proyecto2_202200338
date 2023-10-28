import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Cita} from '../../models/cita.interface'

@Injectable({
  providedIn: 'root'
})
export class EnfermeraCitaService {

  url: string = "//localhost:3001"

  constructor(private http: HttpClient) { }

  listadoCitasP(): Observable<any> {
  
    let direccion = this.url + "/enfermera/mostrarCitasPendientes"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Cita[]>(direccion,{ headers: headers });
  }

  actualizarCita(actualizarCita: any): Observable<any> {
    let params = JSON.stringify(actualizarCita);
    console.log(params);
    let direccion = this.url + "/enfermera/modificarCitas"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(direccion, params,{ headers: headers });
  }



}
