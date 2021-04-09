import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  paymentForm = this.fb.group({
    // paymentDate: ['', Validators.required],
    // paymentMode: ['', Validators.required],
  });

  totalPaymentAmt = 0;
  cartList: any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CartComponent>,
    private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.cartList.push(...this.data.items)
    // console.log(this.cartList);
    this.getTotalAmt()
  }

  get fcontrol() { return this.paymentForm.controls; }

  // Close dailog
  onNoClick(): void {
    this.dialogRef.close();
  }

  removeItem(product: any) {
    let item = {
      action: 'remove',
      product: product
    };

    this.messageService.sendMessage(item);
  }

  removeProduct(product: any) {
    let index = this.cartList.findIndex((item: any) => {
      return item == product;
    })
    this.cartList.splice(index, 1);
    // console.log(this.cartList);
    this.getTotalAmt();

    this.removeItem(product);
  }

  getTotalAmt() {
    this.totalPaymentAmt = 0;
    this.cartList.forEach((product: any) => {
      this.totalPaymentAmt += Number(product.price);
    });
  }

}
