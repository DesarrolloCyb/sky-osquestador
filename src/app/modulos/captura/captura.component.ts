import { Component, OnInit } from '@angular/core';
import { CancelacionComponent } from './cancelacion/cancelacion.component';
import { MatDialog } from '@angular/material/dialog'


@Component({
  selector: 'app-component',
  templateUrl: './captura.component.html',
  styleUrls: ['./captura.component.css']
})
export class CapturaComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

  }


  openAvisos() {
    this.dialog.open(CancelacionComponent, {
      width: "55rem"
    });
    this.capturaCancelacion()

  }

  capturaCancelacion() {
    console.log('Captura de cancelacion')
  }

}
