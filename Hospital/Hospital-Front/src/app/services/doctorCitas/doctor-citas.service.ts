import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Cita } from '../../models/cita.interface'
import { Doctor } from 'src/app/models/doctor.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorCitasService {

  url: string = "//localhost:3001"

  constructor(private http: HttpClient) { }

  mostrarCitasDocPendiente(): Observable<any> {

    let direccion = this.url + "/doctor/mostrarCitasDoctorPendientes"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Cita[]>(direccion, { headers: headers });
  }


  crearReceta(receta: any): Observable<any> {
    let params = JSON.stringify(receta)
    console.log(params);
    let direccion = this.url + "/doctor/crearReceta"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(direccion, params, { headers: headers });
  }

  mostrarTopDoctores(): Observable<any> {

    let direccion = this.url + "/doctor/topDoctores"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Doctor[]>(direccion, { headers: headers });
  }



}
