import { Component, OnInit, Input } from '@angular/core';
import { DoctorCitasService } from 'src/app/services/doctorCitas/doctor-citas.service';
import { Cita } from 'src/app/models/cita.interface';
import Swal from 'sweetalert2';
import { Receta } from 'src/app/models/receta.interface';



@Component({
  selector: 'app-mostrar-citas-doctor',
  templateUrl: './mostrar-citas-doctor.component.html',
  styleUrls: ['./mostrar-citas-doctor.component.css']
})
export class MostrarCitasDoctorComponent implements OnInit {


  public listaCitasDoctor: Cita[];
  public fechaModal: string;
  public idusuarioModal: string;
  public nombreUsuarioModal: string;
  public receta: Receta;



  constructor(private api: DoctorCitasService) {

    this.listaCitasDoctor = [];
    this.receta = new Receta("", "", "", "", "", "");
    this.fechaModal = '';
    this.idusuarioModal = '';
    this.nombreUsuarioModal = '';

  };

  ngOnInit(): void {
    this.api.mostrarCitasDocPendiente().subscribe(data => {
      console.log(data)
      this.listaCitasDoctor = data;
      console.log(this.listaCitasDoctor)
      if (data.status == 2) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No tiene ninguna cita ',
          showConfirmButton: true,
          timer: 1500,
        });
      }


    });
  }

  guardandoDatos(fecha: any, nombrePaciente: any, idPaciente: any) {
    this.fechaModal = fecha;
    this.nombreUsuarioModal = nombrePaciente;
    this.idusuarioModal = idPaciente;
    console.log(fecha, nombrePaciente)


  }

  hacerReceta(padecimiento:any,descripcion:any,precio:any){
    this.receta=new Receta(this.fechaModal,this.nombreUsuarioModal,this.idusuarioModal,padecimiento,descripcion,precio)
    this.api.crearReceta(this.receta).subscribe(data => {
      console.log(data);
      
      if (data.status == 2) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Faltan Datos',
          showConfirmButton: true,
          timer: 1500,

        });
      }
    })
   
    
  }
  



}
