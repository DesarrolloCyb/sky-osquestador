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
  values: any;

  constructor(
    private service:SharedService
  ) { }

  ngOnInit(): void {



      // input_tipocancelacion: 'Tipo 1',
      // input_cuenta: '12313',
      // input_pais: '13213',
      // input_ordenServicio: '0132',
      // input_fechaCaptura: '2022-08-26T10:28:00',
      // input_fechaCacnelacion: '2022-08-26T10:28:00',
      // input_status: 'Pendiente',
      // input_agente: 'Juan'
    

    
    this.values = {
      "id": 7,
      "tipoCancelacion": "string",
     
    }
      
    console.log(this.values)

    this.postTry(this.values)


    console.log('Agregando...')
    this.getTry()
  }



  getTry(){
  
    this.service.getTry().subscribe(data =>{
      this.lista = data;
      console.log('RESPUESTA DE LA API:  \n',this.lista)
    });
  }

  postTry(myValues:any){
  
    this.service.postTry(myValues).subscribe(res =>{
      
      alert(res.toString)
    });
  }

}
//https://github.com/DesarrolloCyb/sky-osquestador.git
