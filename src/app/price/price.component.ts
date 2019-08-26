import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent {

  @Input() priceKey: string;
  @Input() priceValue: string;

  constructor() {}

  color: string;

  rise: boolean;

  prevPrice: string;

  ngOnChanges() {
    if (this.prevPrice) {
      if (this.prevPrice > this.priceValue) {
        this.color = "red";
        this.rise = false;
      } else if (this.prevPrice < this.priceValue) {
        this.color = "green";
        this.rise = true;
      }
      setTimeout(() => {
        this.color = "black";
      }, 2500)
    }
    this.prevPrice = this.priceValue;
  }
}
