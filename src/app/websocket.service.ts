import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { prices } from './actions';
import { webSocket } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

interface AppState {
  payload: object;
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private store: Store<AppState>, private http: HttpClient) {}

  private priceSocket = webSocket('wss://ws-feed.pro.coinbase.com');
  private priceHttp = this.http.get('https://api.pro.coinbase.com/products');
  public currencyPairs = [];

  public subToData() {
    let data = this.priceHttp.pipe(map(data => {
      return Object.keys(data).map(key => data[key].id);
    })).subscribe(
      message => {this.handlePriceTags(message); this.currencyPairs = message},
      error => console.log(error),
      () => console.log('Completed, request finished')
    );
  }

  private handlePriceTags(message): void {
    this.priceSocket.next({
      'type': 'subscribe',
      'product_ids': message,
      'channels': ['ticker']
    });
    this.priceSocket.subscribe(
      message => this.dispatchPricePairs(message),
      error => console.log(error),
      () => console.log('Completed, socket closed')
    );
  }

  private dispatchPricePairs(message): void {
    message.price ? this.store.dispatch(prices({product_id: message.product_id, price: message.price})) : null;
  }
}
