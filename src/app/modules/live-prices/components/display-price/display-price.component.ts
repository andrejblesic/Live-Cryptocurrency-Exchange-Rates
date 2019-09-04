import { Component, OnInit, Output } from '@angular/core';
import { WebsocketService } from "../../services/websocket.service";
import { BehaviorSubject } from "rxjs";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import { map } from "rxjs/operators";

interface AppState {
  message: { prices: object };
}

@Component({
  selector: 'app-display-price',
  templateUrl: './display-price.component.html',
  styleUrls: ['./display-price.component.scss'],
})
export class DisplayPriceComponent implements OnInit {

  constructor(private service: WebsocketService, private store: Store<AppState>) { }

  private prices: object = this.store ? this.store.select(state => state.message ? state.message.prices : null).pipe(share()) : null;
  public currencyPair;
  public factor: number = 1;
  public pair;

  findPair(pair) {
    this.pair = pair;
    this.currencyPair = this.store.select(state => state.message ? state.message.prices[pair] : null).pipe(share());
  }

  changeFactor(factor) {
    this.factor = factor;
  }

  trackByFn(index, item): string {
    return index;
  }

  ngOnInit(): void {
    this.service.subToData();
  }

}
