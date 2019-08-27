import { Injectable } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
import { BehaviorSubject } from "rxjs";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { prices } from "./actions";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

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

  subToData() {
    let data = this.httpObs.pipe(map(data => {
      return Object.keys(data).map(key => data[key].id);
      //return this.product_ids;
    })).subscribe(
      message => this.handlePriceTags(message),//this.handleCurrencyPairs(message),
      error => console.log(error),
      () => console.log("Completed, request finished")
    )
  }

  handlePriceTags(message) {
    this.priceSocket.next({
      "type": "subscribe",
      "product_ids": message,
      "channels": [
          "matches"
      ]
    });
    this.priceSocket.subscribe(
      message => this.dispatchPricePairs(message),
      error => console.log(error),
      () => console.log("Completed, socket closed")
    );
  }

  dispatchPricePairs(message) {
    if (message.price) {
      this.store.dispatch(prices({product_id: message.product_id, price: message.price}))
    }
  }
}
