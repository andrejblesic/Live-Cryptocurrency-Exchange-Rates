import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { WebsocketService } from "@app/shared/services/websocket.service";
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

  constructor() { }

  @Output() selectedPair = new EventEmitter<string>();
  @Output() selectedFactor = new EventEmitter<string>();
  @Input() currencyPair: string;
  @Input() currencyPairs: string[];
  @Input() factor: string[];
  @Input() pair: string[];

  sendPair($event) {
    this.selectedPair.next($event.target.value);
  }

  sendFactor($event) {
    this.selectedFactor.next($event.target.value);
  }

  ngOnInit() { }
}
