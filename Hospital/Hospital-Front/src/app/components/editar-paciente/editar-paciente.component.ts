import { Component } from '@angular/core';
import { Paciente } from 'src/app/models/paciente.interface';
import { ActualizarService } from 'src/app/services/actualizar/actualizar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent {
  public status: string;
  public paciente: Paciente;


  constructor(private api: ActualizarService) {
    this.status = '';//poniendo global la variable 
    this.paciente = new Paciente("", "", "", "", "", "", "", "");
    

  };

  actualizarF(){
    this.api.actualizarPaciente(this.paciente).subscribe(data=>{
      console.log(data);

      if (data.status == 1) {
      

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Actualizado Exitosamente',
          showConfirmButton: true,
          timer: 1500
        });
      }

      if (data.status == 2) {
      
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'El nombre de usuario Esta en Uso',
          showConfirmButton: true,
          timer: 1500
        });
      }
      if (data.status == 3) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'La Contraseña debe tener 8 o mas caracteres',
          showConfirmButton: true,
          timer: 1500
        });
      }
    })
  }

}
