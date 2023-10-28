import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from '../../services/api/api.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public status: string;
  public idUsuarioLog: string;

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api: ApiService, private router: Router) {
    this.status = '';//poniendo global la variable 
    this.idUsuarioLog = '';


  };

  ngOnInit(): void {

  };

  

  onLogin(form: any) {
    this.api.login(form).subscribe(data => {
      console.log(data);
      this.idUsuarioLog = data.idUsuario;
      console.log(this.idUsuarioLog);
      if (data.status == 4) {
        this.status = 'error'
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Datos Erroneos',
          showConfirmButton: false,
          timer: 1500,

        });

      }

      if (data.status == 1) {
        this.status = '1'
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario registrado correctamente',
          timer: 1500,
          showConfirmButton: false
          
        })
        this.router.navigate(['principal'])
      }

      if (data.status == 2) {
        this.status = '2'
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario registrado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['doctorPrincipal'])
      }

      if (data.status == 3) {
        this.status = '3'
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario registrado correctamente',
          showConfirmButton: true,
          timer: 1500
        });
        this.router.navigate(['editarCita'])
      }
    });
  }



}
