import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@app/shared/shared.module';

import { DisplayPriceComponent } from './components/display-price/display-price.component';
import { LivePricesComponent } from './live-prices.component';
import { PriceComponent } from './components/price/price.component';
import { ConverterComponent } from './components/converter/converter.component';
import { FormatPairsPipe } from '@app/pipes/formatpairs';

@NgModule({
  declarations: [
    DisplayPriceComponent,
    PriceComponent,
    ConverterComponent,
    FormatPairsPipe,
    LivePricesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  exports: [LivePricesComponent]
})
export class LivePricesModule {
  constructor() { }
}
