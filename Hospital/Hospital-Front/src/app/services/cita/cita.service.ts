import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  url: string = "//localhost:3001"

  constructor(private http: HttpClient) { }

  nuevaCita(cita: any): Observable<any> {
    let params = JSON.stringify(cita);
    console.log(params);
    let direccion = this.url + "/paciente/solicitarCita"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(direccion, params,{ headers: headers });
  }
}
