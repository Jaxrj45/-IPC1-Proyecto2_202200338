import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegristroPacienteComponent } from './components/regristro-paciente/regristro-paciente.component'
import { EditarPacienteComponent } from './components/editar-paciente/editar-paciente.component'
import { PrincipalComponent } from './components/principal/principal/principal.component';
import { SolicitarCitaComponent } from './components/solicitarCita/solicitar-cita/solicitar-cita.component';
import { ListadoCitasComponent } from './components/listado-citas/listado-citas.component';
import { RecetasComponent } from './components/recetas/recetas/recetas.component';
import { EnfermeraEditarCitaComponent } from './components/enfermera-editar-cita/enfermera-editar-cita.component';
import { DoctorComponent } from './components/doctor/doctor/doctor.component';
import { MostrarCitasDoctorComponent } from './components/mostrarCitasDoctor/mostrar-citas-doctor/mostrar-citas-doctor.component';
import { TopDoctoresComponent } from './components/topDoctores/top-doctores/top-doctores.component';
import { MedicinaComponent } from './components/medicina/medicina/medicina.component';
import { MostrarMedicinaComponent } from './components/mostrarMedicina/mostrar-medicina/mostrar-medicina.component';
import { VerPedidoComponent } from './components/verPedido/ver-pedido/ver-pedido.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro-Paciente', component: RegristroPacienteComponent },
  { path: 'editar-Paciente', component: EditarPacienteComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'solicitarCita', component: SolicitarCitaComponent },
  { path: 'listadoCitas', component: ListadoCitasComponent },
  { path: 'listadoRecetas', component: RecetasComponent },
  { path: 'editarCita', component: EnfermeraEditarCitaComponent },
  { path: 'doctorPrincipal', component: DoctorComponent },
  { path: 'doctorListadoCitas', component: MostrarCitasDoctorComponent },
  { path: 'topDoctores', component: TopDoctoresComponent },
  { path: 'medicina', component: MedicinaComponent },
  { path: 'comprarMedicina', component: MostrarMedicinaComponent },
  { path: 'verPedido', component: VerPedidoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegristroPacienteComponent, EditarPacienteComponent,
  PrincipalComponent, SolicitarCitaComponent, ListadoCitasComponent, RecetasComponent,
   EnfermeraEditarCitaComponent,DoctorComponent,MostrarCitasDoctorComponent,TopDoctoresComponent,
   MedicinaComponent,MostrarMedicinaComponent,VerPedidoComponent]
