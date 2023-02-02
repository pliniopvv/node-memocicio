import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AplicarComponent } from './components/aplicar/aplicar.component';
import { FlashComponent } from './components/flash/flash.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'aplicar' },
  { path: 'aplicar', component: AplicarComponent },
  { path: 'conjuntos', loadChildren: () => import('./components/conjuntos/conjuntos.module').then(m => m.ConjuntosModule) },
  { path: 'cards', loadChildren: () => import('./components/cards/cards.module').then(m => m.CardsModule) },
  { path: 'flash', component: FlashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
