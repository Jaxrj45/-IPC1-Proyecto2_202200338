import { Component, OnInit } from '@angular/core';
import { Medicina } from 'src/app/models/medicina.interface';
import { Pedido } from 'src/app/models/pedido.interface';
import { ListaMedicinaService } from 'src/app/services/listaMedicina/lista-medicina.service';

@Component({
  selector: 'app-ver-pedido',
  templateUrl: './ver-pedido.component.html',
  styleUrls: ['./ver-pedido.component.css']
})
export class VerPedidoComponent implements OnInit {
  public listaPedidos: Pedido[];
  public medicamentos: Medicina[];
  public cadena;


  constructor(private api: ListaMedicinaService) {
    this.listaPedidos = []
    this.medicamentos=[];
    this.cadena="";
  }

  ngOnInit(): void {
    this.api.listaMisPedidos().subscribe(data=>{
      this.listaPedidos=data;
      this.medicamentos=data.medicamentos;
      console.log(this.listaPedidos)
 
     
    })
  }
  
}
