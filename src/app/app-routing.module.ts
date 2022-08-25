import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './layout/error404/error404.component';
import { CancelacionComponent } from './modulos/captura/cancelacion/cancelacion.component';
import { CapturaComponent } from './modulos/captura/captura.component';
import { QuejasComponent } from './modulos/captura/quejas/quejas.component';
import { HomeComponent } from './modulos/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent}
    ,
  {
    path: 'captura',
    //
    children: [
      {
        path: '',
        component: CapturaComponent,
      },
      {
        path: 'cancelacion',
        component: CancelacionComponent
      },
      {
        path: 'quejas',
        component: QuejasComponent
      }
    ]
  },
  {
    path: '**',
    component: Error404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
