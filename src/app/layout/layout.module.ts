import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TemplatesModule } from '../other-modules/templates/templates.module';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [LayoutComponent, ProductsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutRoutingModule,
    TemplatesModule
  ]
})
export class LayoutModule { }
