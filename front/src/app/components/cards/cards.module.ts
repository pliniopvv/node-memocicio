import { NgModule } from '@angular/core';

import { CardsRoutingModule } from './cards-routing.module';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { CardsComponent } from './cards.component';
import { ComumModule } from 'src/app/modules/comum/comum.module';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [AdicionarComponent, CardsComponent, EditarComponent],
  imports: [
    ComumModule,
    CardsRoutingModule
  ]
})
export class CardsModule { }
