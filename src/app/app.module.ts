import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayPriceComponent } from './display-price/display-price.component';
import { WebsocketService } from './websocket.service';
import { PriceComponent } from './price/price.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { priceReducer } from './price.reducer';
import { ConverterComponent } from './converter/converter.component';
import { FormatPairs } from './pipes/formatpairs';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPriceComponent,
    PriceComponent,
    ConverterComponent,
    FormatPairs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({message: priceReducer})
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
