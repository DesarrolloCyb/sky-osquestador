
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { CommonModule } from '@angular/common';
import { CancelacionComponent } from './cancelacion/cancelacion.component';
import { CapturasRoutingModule } from './capturas-routing.module';


@NgModule({
  declarations: [CancelacionComponent],
  imports: [CommonModule, CapturasRoutingModule, SharedModule],
})
export class CapturasModule {}
