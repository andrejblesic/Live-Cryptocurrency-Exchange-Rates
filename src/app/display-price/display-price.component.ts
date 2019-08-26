import { Component, OnInit, Output } from '@angular/core';
import { WebsocketService } from "../websocket.service";
import { share } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

interface AppState {
  message;
}

@Component({
  selector: 'app-display-price',
  templateUrl: './display-price.component.html',
  styleUrls: ['./display-price.component.scss'],
})
export class DisplayPriceComponent implements OnInit {

  constructor(private service: WebsocketService, private store: Store<AppState>) {}

  prices = this.store ? this.store.select(state => state.message ? state.message.prices : null).pipe(share()) : null;

  ngOnInit() {
    this.service.subToSocket();
  }

  trackByFn(index, item) {
    return index;
  }
}
