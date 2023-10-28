import { Component, OnInit } from '@angular/core';
import { Cita } from '../../models/cita.interface'
import { EnfermeraCitaService } from 'src/app/services/enfermeraCita/enfermera-cita.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enfermera-editar-cita',
  templateUrl: './enfermera-editar-cita.component.html',
  styleUrls: ['./enfermera-editar-cita.component.css']
})
export class EnfermeraEditarCitaComponent implements OnInit {

  public listaCitasPendientes: Cita[];
  public cita: Cita;


  constructor(private api: EnfermeraCitaService) {

    this.listaCitasPendientes = [];
    this.cita = new Cita('', '', '', '', '', '', '')
  };

  ngOnInit(): void {
    this.api.listadoCitasP().subscribe(data => {

      this.listaCitasPendientes = data;
      

    })
  }

  editarCitaF(id: any, doctor: any, estado: any) {
    console.log(id, doctor, estado);
    this.cita = new Cita(id, '', '', '', '', estado, doctor)
    this.api.actualizarCita(this.cita).subscribe(data => {
      console.log(data)
      
      if (data.status == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cita Aceptada',
          showConfirmButton: true,
          timer: 1500
        });
      }

      if (data.status == 2) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Debe Seleccionar un Doctor',
          showConfirmButton: true,
          timer: 1500
        });
      }

      if (data.status == 3) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Cita Rechazada',
          showConfirmButton: true,
          timer: 1500
        });
      }

      if (data.status == 4) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Seleccione un Doctor',
          showConfirmButton: true,
          timer: 1500
        });
      }
      
    })
    this.ngOnInit();
  }

  obtenervalorBoton() {

  }


}
