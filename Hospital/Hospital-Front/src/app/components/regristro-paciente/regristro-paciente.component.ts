import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from '../../services/api/api.service'
import { RegistroService } from 'src/app/services/registro/registro.service';
import { Paciente } from 'src/app/models/paciente.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regristro-paciente',
  templateUrl: './regristro-paciente.component.html',
  styleUrls: ['./regristro-paciente.component.css']
})
export class RegristroPacienteComponent {

  public status: string;
  public paciente: Paciente;
 

  registroForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    usuario: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  })

  constructor(private api: RegistroService) {
    this.status = '';//poniendo global la variable 
    this.paciente = new Paciente("", "", "", "", "", "", "", "");
  

  };

  registroF() {
    this.api.registroPaciente(this.paciente).subscribe(data => {
      console.log(data);
      

      if (data.status == 1) {
        this.status = '1'//Usuario Existente
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'El nombre de usuario ya esta en uso ',
          showConfirmButton: true,
          timer: 1500,
         
        });
      }

      if (data.status == 2) {
        this.status = '2'//Agregado Exitosamente
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Agregado Exitosamente',
          showConfirmButton: true,
          timer: 1500,
         
        });


      }

      if (data.status == 3) {
        this.status = '3'//Faltan Digitos en la contraseña
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'La contraseña debe tener mas de 8 caracteres',
          showConfirmButton: false,
          timer: 1500,
         
        });
      }

      if (data.status == 4) {
        this.status = '4'//Rellene los campos necesarios
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Rellene los campos Necesarios',
          showConfirmButton: false,
          timer: 1500,
         
        });
      }

    })
  }
}
