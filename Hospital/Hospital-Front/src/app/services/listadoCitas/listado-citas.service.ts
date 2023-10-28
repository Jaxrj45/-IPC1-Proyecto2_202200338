import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Cita} from '../../models/cita.interface'

@Injectable({
  providedIn: 'root'
})
export class ListadoCitasService {

  url: string = "//localhost:3001"

  constructor(private http: HttpClient) { }

  listadoC(): Observable<any> {
  
    let direccion = this.url + "/paciente/obtenerListaDeMisCitas"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Cita[]>(direccion,{ headers: headers });
  }
}
