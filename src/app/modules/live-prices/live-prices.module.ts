import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '@angular/forms';

import { DisplayPriceComponent } from './components/display-price/display-price.component';
import { LivePricesComponent } from './live-prices.component';
import { WebsocketService } from './services/websocket.service';
import { PriceComponent } from './components/price/price.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ConverterComponent } from './components/converter/converter.component';
import { FormatPairs } from '../../pipes/formatpairs';
import { priceReducer } from '../../store/price.reducer';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DisplayPriceComponent,
    PriceComponent,
    ConverterComponent,
    FormatPairs
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    StoreModule.forRoot({message: priceReducer}),
  ],
  providers: [WebsocketService],
  exports: [DisplayPriceComponent]
})
export class LivePricesModule {
  constructor() {}
}
