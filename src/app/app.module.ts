import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { LivePricesModule } from './modules/live-prices/live-prices.module';
import { LivePricesComponent } from './modules/live-prices/live-prices.component';
import { ConverterComponent } from './modules/live-prices/components/converter/converter.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

const appRoutes: Routes = [
  { path: 'prices', component: LivePricesComponent },
  { path: '', redirectTo: 'prices', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LivePricesModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
