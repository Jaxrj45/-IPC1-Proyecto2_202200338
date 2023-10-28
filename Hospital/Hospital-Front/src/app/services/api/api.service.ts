import { Injectable } from '@angular/core';
//import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  url: string = "//localhost:3001"

  constructor(private http: HttpClient) { }

  login(login: any): Observable<any> {
    let params = JSON.stringify(login)
    console.log(params);
    let direccion = this.url + "/paciente/login"
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(direccion, params,{ headers: headers });
  }

}
