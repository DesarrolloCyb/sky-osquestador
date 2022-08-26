import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
//---------SERVICIOS---------
import {SharedService} from 'src/app/services/shared.service';



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
input_id = 0;
input_tipocancelacion:any;
input_cuenta:number = 0;
input_pais:any;
input_ordenServicio: any;
input_fechaCaptura:any;
input_fechaCacnelacion:any;
input_status:any;
input_agente:any;



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

  lista:any [] = []

  constructor(
    private service:SharedService
  ) { }

  ngOnInit(): void {

    this.getTry()
  }



  getTry(){
    let APIurl= ' https://localhost:44372/api/Formularios/ObtenerCuenta';
    this.service.getTry(APIurl).subscribe(data =>{
      this.lista = data;
      console.log('RESPUESTA DE LA API:  \n',this.lista)
    });
  }

}
//https://github.com/DesarrolloCyb/sky-osquestador.git
