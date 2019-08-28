import { Component, OnInit, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { WebsocketService } from "../websocket.service"
import { map } from 'rxjs/operators';
import { share } from "rxjs/operators";

interface AppState {
  message;
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  constructor(private service: WebsocketService, private store: Store<AppState>) { }

  @Input() currencyPairs;

  currencyPair: Observable<any>;
  factor: number = 1;

  findPair($event) {
    this.currencyPair = this.store.select(state => state.message ? (parseFloat(state.message.prices[$event.target.value])) : null).pipe(share());
  }

  ngOnInit() {
  }

}
