import { Injectable } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
import { BehaviorSubject } from "rxjs";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { prices } from "./actions";
import { HttpClient } from '@angular/common/http';

interface AppState {
  payload: object;
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private store: Store<AppState>, private http: HttpClient) {}

  private priceSocket = webSocket("wss://ws-feed.pro.coinbase.com");
  private httpObs = this.http.get("https://api.pro.coinbase.com/products");
  private product_ids = [];

  handleCurrencyPairs(message) {
    for (let item in message) {
      this.product_ids.push(message[item].id);
    }
    this.priceSocket.next({
      "type": "subscribe",
      "product_ids": this.product_ids,
      "channels": [
          "matches"
      ]
    });
    this.priceSocket.subscribe(
      message => this.handlePricePairs(message),
      error => console.log(error),
      () => console.log("Completed, socket closed")
    );
  }

  handlePricePairs(message) {
    if (message.price) {
      this.store.dispatch(prices({product_id: message.product_id, price: message.price}))
    }
  }

  subToSocket() {
    this.httpObs.subscribe(
      message => this.handleCurrencyPairs(message),
      error => console.log(error),
      () => console.log("Completed, request finished")
    )
  }
}
