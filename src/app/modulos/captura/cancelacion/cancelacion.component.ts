import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface TipoCancelacion {
  value: number;
  nombre: string;
}
interface Pais {
  value: number;
  nombre: string;
}


@Component({
  selector: 'app-cancelacion',
  templateUrl: './cancelacion.component.html',
  styleUrls: ['./cancelacion.component.css']
})
export class CancelacionComponent implements OnInit {

//▬▬▬▬▬▬▬▬VARIABLES DE ASIGNACION▬▬▬▬▬▬▬▬▬▬▬▬


//▬▬▬▬▬▬▬▬VALIDACION DE DROPDOWN▬▬▬▬▬▬▬▬▬▬▬▬
//------TIPO DE CANCELACION--------
  cancelacionControl = new FormControl(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  tipocancelacion: TipoCancelacion[] = [
    {
      value: 1,
      nombre: "Sigle Video",
    },
    {
      value: 2,
      nombre: "Módem Combo",
    },
    {
      value: 3,
      nombre: "BTCEL Combo",
    },
  ];

  //------TIPO PAÍS--------
  PaisControl = new FormControl(null, Validators.required);

  Pais: Pais[] = [
    {
      value: 1,
      nombre: "Mexico",
    },
    {
      value: 2,
      nombre: "Colombia",
    },
    {
      value: 3,
      nombre: "Costa Rica",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
