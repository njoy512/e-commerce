import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productDetails: any = [];
  @Output() selected = new EventEmitter<any>();

  isHover: boolean = false;
  isAddToCart: boolean = false;
  size: any;

  constructor() { }

  ngOnInit(): void {
    this.isHover = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

  addToCart() {
    this.isAddToCart = false;
    let data = {
      id: this.productDetails.id,
      name: this.productDetails.name,
      price: this.productDetails.price,
      size: this.size
    };
    this.selected.emit(data);
  }

  selectedSize(index: number) {
    console.log(this.productDetails?.options[index]);
    this.size = this.productDetails?.options[index]
    this.isAddToCart = true;
  }

}
