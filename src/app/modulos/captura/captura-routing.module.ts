import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelacionComponent } from './cancelacion/cancelacion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CancelacionComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapturaRoutingModule { }
