import { ConjuntosComponent } from './conjuntos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarComponent } from './adicionar/adicionar.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '', component: ConjuntosComponent }
  // { path: 'adicionar', component: AdicionarComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConjuntosRoutingModule { }
