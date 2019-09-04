import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { share } from 'rxjs/operators';
import { WebsocketService } from "../../../modules/live-prices/services/websocket.service";

interface AppState {
  message: {user: object}
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<AppState>, private service: WebsocketService) { }

  userName: object;

  ngOnInit() {
    this.service.fetchUser();
    this.userName = this.store.select(state => state.message ? state.message.user : null).pipe(share());
  }

}
