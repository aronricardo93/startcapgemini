import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaStartComponent } from './start/lista-start.component';
import { DadosStartComponent } from './start/dados-start.component';
import { NovoStartComponent } from './start/novo-start.component';
import { EditarStartComponent } from './start/editar-start.component';

const routes: Routes = [
  {path: '', component: ListaStartComponent},
  {path: 'dados/:id', component: DadosStartComponent},
  {path: 'novo', component: NovoStartComponent},
  {path: 'editar/:id', component: EditarStartComponent},
  {path: "**", redirectTo: '', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
