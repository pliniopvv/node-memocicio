import { NgModule } from '@angular/core';

import { ConjuntosRoutingModule } from './conjuntos-routing.module';
import { ConjuntosComponent } from './conjuntos.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { ComumModule } from 'src/app/modules/comum/comum.module';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [ConjuntosComponent, AdicionarComponent, EditarComponent],
  imports: [
    ComumModule,
    ConjuntosRoutingModule
  ]
})
export class ConjuntosModule { }
