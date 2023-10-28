import { Component } from '@angular/core';
import { Cita } from 'src/app/models/cita.interface';
import { CitaService } from 'src/app/services/cita/cita.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css']
})
export class SolicitarCitaComponent {

  public status: string;
  public cita: Cita;

  constructor(private api: CitaService) {
    this.status = '';//poniendo global la variable 
    this.cita = new Cita("", "", "","","","","");
  };

  registroCitaF() {
    this.api.nuevaCita(this.cita).subscribe(data => {
      console.log(data);



      if (data.status == 1) {
        this.status = '1'//No puede tener dos citas el mismo dia 

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No puede tener dos citas el mismo dia',
          showConfirmButton: false,
          timer: 1500
        });
      }

      if (data.status == 2) {
        this.status = '2'//Agregado Exitosamente
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cita solicitada Exitosamente',
          showConfirmButton: false,
          timer: 1500
        });

      }

      if (data.status == 3) {
        this.status = '3'//Faltan Digitos en la contraseña

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Faltan Datos',
          showConfirmButton: false,
          timer: 1500
        });

      }


    })
  }

}
