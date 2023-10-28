import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ListaMedicinaService } from 'src/app/services/listaMedicina/lista-medicina.service';
import { Medicina } from 'src/app/models/medicina.interface';
import { FormControl,FormGroup } from '@angular/forms';
import { Aumentado } from 'src/app/models/aumentar.interface';
import { Pedido } from 'src/app/models/pedido.interface';

@Component({
  selector: 'app-mostrar-medicina',
  templateUrl: './mostrar-medicina.component.html',
  styleUrls: ['./mostrar-medicina.component.css']
})
export class MostrarMedicinaComponent implements OnInit {

  public listaMedicamento: Medicina[];
  public cantidad;
  public aumento:Aumentado;
  public disminuido:Aumentado;
  public total:any;
  public pedido:Pedido;
  

  constructor(private api: ListaMedicinaService) {

    this.listaMedicamento = [];
    this.cantidad=0;
    this.aumento= new Aumentado("","");
    this.disminuido= new Aumentado("","");
    this.pedido= new Pedido("","",[],0);
    
  };

  ngOnInit(): void {
    this.api.listadoMedicinas().subscribe(data => {
      this.listaMedicamento = data;
      


       //Calculamos el TOTAL 
    this.total = this.listaMedicamento.reduce((
      acc,
      obj,
    ) => acc + (obj.subTotal),
    0);
    console.log("Total: ", this.total)
    })

   
  }

  aumentar(posicion:any,nombre:any){
    this.aumento= new Aumentado(posicion,nombre);
    this.api.aumentarM(this.aumento).subscribe(data =>{
      
    })
    this.ngOnInit();
  }

  disminuir(posicion2:any,nombre2:any){
    this.disminuido= new Aumentado(posicion2,nombre2);
   
    this.api.disminuir(this.disminuido).subscribe(data =>{
      
      this.ngOnInit();
    })
    
  }

  enviarPedido(){
    if(this.total>0){
      this.pedido= new Pedido("","",[],this.total);
      this.api.confirmarPedido(this.pedido).subscribe(data=>{
        console.log(data)

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Pedido Registrado',
          showConfirmButton: true,
          timer: 1500
        });
        
      })
    }else{
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'No ha seleccionado ningun Medicamento',
        showConfirmButton: true,
        timer: 1500
      });
    }
  }

   mostrarPedido() {
    this.api.listaMisPedidos().subscribe(data=>{
      console.log(data)
    })
  }

  



}
