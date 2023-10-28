import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Receta} from '../../models/receta.interface'

@Injectable({
  providedIn: 'root'
})
export class ListadoRecetasService {

  url: string = "//localhost:3001"

  constructor(private http: HttpClient) { }

  listadoRZ(): Observable<any> {
  
    let direccion = this.url + "/paciente/verRecetas"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Receta[]>(direccion,{ headers: headers });
  }
}
