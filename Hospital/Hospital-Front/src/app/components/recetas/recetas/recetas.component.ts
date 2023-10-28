import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ListadoRecetasService } from 'src/app/services/listadoRecetas/listado-recetas.service'; 
import { Receta } from 'src/app/models/receta.interface';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {


  public listadoRecetas: Receta[];

  constructor(private api: ListadoRecetasService) {

    this.listadoRecetas = [];
  };

  ngOnInit(): void {
    this.api.listadoRZ().subscribe(data => {

      this.listadoRecetas = data;
      console.log(data)
      console.log(this.listadoRecetas)
      if (data.status == 2) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No tiene ninguna Receta ',
          showConfirmButton: true,
          timer: 1500,

        });
      }

    })
 
  }

}
