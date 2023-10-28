import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicina } from '../../models/medicina.interface'
import { JsonPipe } from '@angular/common';
import { Pedido } from 'src/app/models/pedido.interface';
@Injectable({
  providedIn: 'root'
})
export class ListaMedicinaService {

  url: string = "//localhost:3001"
  constructor(private http: HttpClient) { }

  listadoMedicinas(): Observable<any> {
    let direccion = this.url + "/paciente/mostrarMedicamentos"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Medicina[]>(direccion, { headers: headers });
  }


  aumentarM(datosA: any): Observable<any> {
    let params = JSON.stringify(datosA);
    let direccion = this.url + "/paciente/agregarMedicina"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(direccion, params, { headers: headers });
  }


  disminuir(datosD: any): Observable<any> {
    let params = JSON.stringify(datosD);
    let direccion = this.url + "/paciente/quitarMedicina"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(direccion, params, { headers: headers });
  }

  listaMisPedidos(): Observable<any> {
    let direccion = this.url + "/paciente/verPedido"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Pedido[]>(direccion, { headers: headers });
  }

  confirmarPedido(datos: any): Observable<any> {
    let params = JSON.stringify(datos);
    let direccion = this.url + "/paciente/comparMedicamentos"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(direccion, params, { headers: headers });
  }



}
