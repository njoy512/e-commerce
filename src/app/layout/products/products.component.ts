import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productData: any;
  filteredData: any = [];

  selectedFilter = 'All Products';
  selectedSort = 2;

  sortOptions = [
    {
      id: 1,
      name: 'Price Low to High'
    },
    {
      id: 2,
      name: 'Price High to Low'
    }
  ]

  // filterOptions = ['All Products', 'Tee Shirt', 'Denim', 'Sweatshirts', 'Polo Tee Shirt', 'Shirt'];
  filterOptions = ['All Products'];

  messages: any[] = [];
  subscription: any;

  constructor(private http: HttpClient, private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.log(message);
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getData();
  }

  itemAdded(event: any) {
    console.log('itemAdded', event);
    let item = {
      action: 'add',
      product: event
    };

    this.messageService.sendMessage(item);
    // setTimeout(() => {
    //   this.removeItem(event);
    // }, 1000);
  }

  removeItem(product: any) {
    let item = {
      action: 'remove',
      product: product
    };

    this.messageService.sendMessage(item);
  }

  tagFilter(tag: string) {
    if (tag == 'All Products') {
      this.filteredData = this.productData;
    } else {
      this.filteredData = this.productData.filter((product: any) => product.tag == tag);
    }
    this.selectedFilter = tag;
    // console.log('selectedFilter', this.selectedFilter);
    console.log('filteredData', this.filteredData);
  }

  sortData(order: number) {
    if (order == 1) {
      this.filteredData.sort((a: any, b: any) => a.price - b.price);
    } else {
      this.filteredData.sort((a: any, b: any) => b.price - a.price);
    }
    console.log('filteredData', this.filteredData);
    this.selectedSort = order;
  }

  selectSort(item: any) {
    // console.log(item);
    this.sortData(item.id);
  }

  getAllTags() {
    this.productData.forEach((product: any) => {
      if (!this.filterOptions.includes(product.tag)) {
        this.filterOptions.push(product.tag);
      }
    });
    console.log(this.filterOptions);
  }

  getData() {
    this.getJSON("assets/data/productData.json").subscribe((res: any) => {
      this.productData = res.data;
      console.log(this.productData)
      this.getAllTags();
      this.tagFilter('All Products');
      this.sortData(1);
    })
  }

  private getJSON(path: any): Observable<any> {
    return this.http.get(path);
  }

}
