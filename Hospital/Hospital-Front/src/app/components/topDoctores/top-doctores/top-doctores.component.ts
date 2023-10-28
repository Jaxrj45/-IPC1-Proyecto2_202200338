import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DoctorCitasService } from 'src/app/services/doctorCitas/doctor-citas.service';
import { Doctor } from 'src/app/models/doctor.interface';

@Component({
  selector: 'app-top-doctores',
  templateUrl: './top-doctores.component.html',
  styleUrls: ['./top-doctores.component.css']
})
export class TopDoctoresComponent implements OnInit {

  public listadoTop: Doctor[];

  constructor(private api: DoctorCitasService) {

    this.listadoTop = [];
  };

  ngOnInit(): void {
    this.api.mostrarTopDoctores().subscribe(data => {
      this.listadoTop = data;
      console.log(data)

      if (data.status == 2) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Aun no hay Doctores Top',
          showConfirmButton: true,
          timer: 1500,

        });
      }
    })
  }


}
