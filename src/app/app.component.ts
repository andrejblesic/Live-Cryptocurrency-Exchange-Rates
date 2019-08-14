import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Orange-V2';

  ngOnInit() {
    const socket = new WebSocket("wss://ws.bitstamp.net");
    let btcusdJson = JSON.stringify({
      "event": "bts:subscribe",
      "data": {
        "channel": "live_trades_btcusd"
      }
    });
    socket.onopen = function() {
      socket.send(btcusdJson);
    }
    socket.onclose = function() {
      console.log("closed!");
    }
    socket.onmessage = function(data) {
      console.log(data);
    }
  }
}
