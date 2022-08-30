import { Customer } from './../../../demo/api/customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'app/demo/service/customer.service';
import { Message, MessageService } from 'primeng/api';
import {APIService} from '../../../_services/api.service';

@Component({
  selector: 'cancelacion',
  templateUrl: './cancelacion.component.html',
  styleUrls: ['./cancelacion.component.scss'],
  providers: [MessageService]
})


export class CancelacionComponent implements OnInit {
  //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬VARIABLES ASIGNABLES▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

  inputs_asigandos: any; //Diccionario que los contiene

  input_tipoCancelacion: any;
  input_numeroCuenta: any;
  input_ordenServicio: any;
  input_pais: any;
  input_fechaCaptura: any;
  input_fechaCancelacion: any;

  agenteID = 123456;
  //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬VARIABLES ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  //Variables de opciones
  tiposCancelacion = [
    {
      value: 'single_video',
      nombre: "Sigle Video",
    },
    {
      value: 'modem_combo',
      nombre: "Módem Combo",
    },
    {
      value: 'btcel_combo',
      nombre: "BTCEL Combo",
    },
  ];

  Pais = ["Mexico", "Costa Rica", "Panama", "Nicaragua", "El Salvador"," R. Dominicana", "Guatemala", "Honduras"];

  confirmacion: any;
  // VARIABLES DE CONFIGURACION
  loading: boolean = false;
  mostrandoResultados: boolean = false
  display: boolean = false; //Dialogo de confirmacion
  msgs: Message[] = [];
  formulario_valido: boolean | undefined;
  customers: Customer[] = [];
  minDate =  new Date()

  //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ CONSTRUCTOR ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

  constructor
  (
    private service_api:APIService,
    private service: MessageService
  ) { }

  ngOnInit() {

  }

  //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ FUNCIONES DE FORMAULARIO ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  asignarVariables() {
    //las keys estan fijadas por la api, no se modifican.
    const date = new Date(this.input_fechaCancelacion).toLocaleDateString();

    this.inputs_asigandos = {
      id: 0,
      tipoCancelacion: this.input_tipoCancelacion,
      cuenta: this.input_numeroCuenta,
      ordenServicio: this.input_ordenServicio,
      pais: this.input_pais,
      fechaCaptura:this.minDate.toLocaleDateString('es-MX'), //Esta fecha es la del dia de la maquina
      fechaCancelacion: date, //Falta validar fecha mayor al dia actual
      estatus: 'Pendiente',
      cve_usuario: this.agenteID //Se obtiene del direcotrio activo


    };
    //console.log("Datos ingresados, \n",   this.inputs_asigandos )


    this.validacionDatos(this.inputs_asigandos)

  }



  validacionDatos(datos: any) {
    this.formulario_valido = true;
    let claves = Object.keys(datos);
    for (let i of claves) {

      if (datos[i] != undefined) {
        console.log(datos[i])

      } else {
        this.showErrorViaToast()

        this.formulario_valido = false

      }

      this.confirmacion = [

        {key:'Tipo de cancelación', value: this.input_tipoCancelacion},
        {key:'Cuenta', value: this.input_numeroCuenta},
        {key:'Numero de orden', value:  this.input_ordenServicio},
        {key:'Pais', value: this.input_pais},
        {key:'Fecha de corte', value: new Date(this.input_fechaCancelacion).toLocaleDateString()}

      ]

    }
  }

  //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ API ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬


  getTry(){

    this.service_api.getTry('/Formularios/ObtenerCuenta').subscribe(data =>{
      console.log('RESPUESTA DE LA API:  \n',data)
    });
  }

  postTry(myValues:any){
    this.service_api.postTry('/Formularios/GuardarFormulario' , myValues).subscribe(res =>{
      alert(res.toString)
    });
  }

  //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ MENSAJES ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  showErrorViaToast() {
    console.log('ALERTA')
    this.service.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Faltan datos' });

  }

}
