import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ListadoCitasService } from '../../services/listadoCitas/listado-citas.service'
import { Cita } from '../../models/cita.interface'

@Component({
  selector: 'app-listado-citas',
  templateUrl: './listado-citas.component.html',
  styleUrls: ['./listado-citas.component.css']
})
export class ListadoCitasComponent implements OnInit {


  public listaCitas: Cita[];


  constructor(private api: ListadoCitasService) {

    this.listaCitas = [];
  };

  ngOnInit(): void {
    this.api.listadoC().subscribe(data => {

      this.listaCitas = data;
      console.log(data)
      console.log(this.listaCitas)
      if (data.status == 2) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No tiene ninguna cita ',
          showConfirmButton: true,
          timer: 1500,

        });
      }

    })
  }


  listaF() {
    this.api.listadoC().subscribe(data => {
      console.log(data);
    })
  }

}
