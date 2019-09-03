import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { LivePricesModule } from './modules/live-prices/live-prices.module';
import { LivePricesComponent } from './modules/live-prices/live-prices.component';

@NgModule({
  declarations: [
    AppComponent,
    LivePricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LivePricesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
