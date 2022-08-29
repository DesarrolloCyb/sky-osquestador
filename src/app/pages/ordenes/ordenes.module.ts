import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { OrdenesRoutingModule } from './ordenes-routing.module';
import { OrdenesComponent } from './dashboard/ordenes.component';
import { SharedModule } from '@shared';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [OrdenesComponent],
  imports: [CommonModule, OrdenesRoutingModule, SharedModule],
})
export class OrdenesModule {}
