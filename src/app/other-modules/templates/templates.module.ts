import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TemplatesComponent } from './templates.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FilterComponent } from './filter/filter.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ResponsiveLayoutComponent } from './responsive-layout/responsive-layout.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';



@NgModule({
  declarations: [
    TemplatesComponent,
    ProductCardComponent,
    FilterComponent,
    BreadcrumbComponent,
    HeaderComponent,
    SideBarComponent,
    ResponsiveLayoutComponent,
    FilterBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [
    ProductCardComponent,
    FilterComponent,
    BreadcrumbComponent,
    HeaderComponent,
    SideBarComponent,
    ResponsiveLayoutComponent,
    FilterBoxComponent
  ]
})
export class TemplatesModule { }
