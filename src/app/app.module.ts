import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { LivePricesModule } from './modules/live-prices/live-prices.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LivePricesComponent } from './modules/live-prices/live-prices.component';
import { reducer } from './store/price.reducer';

const appRoutes: Routes = [
  { path: 'prices', component: LivePricesComponent },
  { path: '', redirectTo: 'prices', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LivePricesModule,
    SharedModule,
    StoreModule.forRoot({ message: reducer }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
