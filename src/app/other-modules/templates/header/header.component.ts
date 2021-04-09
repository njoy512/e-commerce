import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'src/app/services/message.service';
import { CartComponent } from '../../modals/cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItems: any[] = [];
  subscription: any;

  constructor(public dialog: MatDialog, private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.log(message);
      if (message.data.action == 'add') {
        this.cartItems.push(message.data.product);
      } else if (message.data.action == 'remove') {
        this.removeProduct(message.data.product);
      }
      console.log(this.cartItems);
    });
  }

  removeProduct(product: any) {
    // this.cartProductList = this.cartProductList
    //   .filter(({ name }) => name !== product.name)

    let index = this.cartItems.findIndex((item: any) => {
      return item == product;
    })
    this.cartItems.splice(index, 1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  gotoCart(): void {
    const dialogRef = this.dialog.open(CartComponent, {
      width: '700px',
      data: { items: this.cartItems }
    });

    dialogRef.afterClosed().subscribe((result: any) => {

    });
  }

}
