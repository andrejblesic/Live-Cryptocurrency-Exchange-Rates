import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent {

  @Input() priceKey: string;
  @Input() priceVal: string;

  constructor() { }

  private color: string;
  private prevPriceVal: string;
  private rise: boolean;

  ngOnChanges(): void {
    if (this.prevPriceVal) {
      if (this.prevPriceVal > this.priceVal) {
        this.color = 'red';
        this.rise = false;
      } else if (this.prevPriceVal < this.priceVal) {
        this.color = 'green';
        this.rise = true;
      }
      setTimeout(() => {
        this.color = 'black';
      }, 2500)
    }
    this.prevPriceVal = this.priceVal;
  }
}
