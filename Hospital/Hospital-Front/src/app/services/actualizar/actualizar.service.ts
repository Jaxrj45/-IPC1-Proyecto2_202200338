import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualizarService {

  url: string = "//localhost:3001"

  constructor(private http: HttpClient) { }

  actualizarPaciente(actualizarP: any): Observable<any> {
    let params = JSON.stringify(actualizarP)
    console.log(params);
    let direccion = this.url + "/paciente/modificarPaciente"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(direccion, params,{ headers: headers });
  }
}
