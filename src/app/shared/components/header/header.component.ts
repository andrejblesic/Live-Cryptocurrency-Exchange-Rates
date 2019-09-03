import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { share } from 'rxjs/operators';

interface AppState {
  message: {user: object}
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  userName: object;

  ngOnInit() {
    this.userName = this.store.select(state => state.message ? state.message.user : null).pipe(share());
  }

}
