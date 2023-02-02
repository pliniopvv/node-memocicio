import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AplicarComponent } from './components/aplicar/aplicar.component';
import { PrimeNGModule } from './modules/prime-ng/prime-ng.module';
import { ComumModule } from './modules/comum/comum.module';
import { FlashComponent } from './components/flash/flash.component';

@NgModule({
  declarations: [
    AppComponent,
    AplicarComponent,
    FlashComponent,
  ],
  imports: [
    BrowserModule,
    ComumModule,
    PrimeNGModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
