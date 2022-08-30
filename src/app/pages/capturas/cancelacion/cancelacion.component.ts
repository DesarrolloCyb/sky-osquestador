
import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { APIService } from '../../../_services/api.service';

@Component({
  selector: 'cancelacion',
  templateUrl: './cancelacion.component.html',
  styleUrls: ['./cancelacion.component.scss'],
  providers: [MessageService],
  // styles: [`
  // :host ::ng-deep .p-message {
  //   margin-left: .25em;
  // }

  //     :host ::ng-deep .p-toast{
  //         z-index:99999;
  //     }
  // `],

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

  agenteID = 123456; //Debe salir del direcotrio activo
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

  Pais = ["Mexico", "Costa Rica", "Panama", "Nicaragua", "El Salvador", " R. Dominicana", "Guatemala", "Honduras"];

  confirmacion: any; //Mensaje de confirmmacion de datos
  // VARIABLES DE CONFIGURACION
  loading: boolean = false;
  mostrandoResultados: boolean = false
  display: boolean = false; //Dialogo de confirmacion
  formulario_valido: boolean | undefined;
  minDate = new Date()
  //Alertas y mensajes
  msgs: Message[] = [];
  msgs1:any;
  validador = [false]

  //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ CONSTRUCTOR ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

  constructor
    (
      private service_api: APIService,
      private messageService: MessageService
    ) { }

  ngOnInit() {

    this.getTry()
  }


  //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ FUNCIONES DE FORMAULARIO ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  asignarVariables() {
    //las keys estan fijadas por la api, no se modifican.
    const date = new Date(this.input_fechaCancelacion).toLocaleDateString();

    this.inputs_asigandos = {
      id: 0,
      tipoCancelacion: this.input_tipoCancelacion,
      cuenta: String(this.input_numeroCuenta),
      ordenServicio: this.input_ordenServicio,
      pais: this.input_pais,
      fechaCaptura: '2022-08-26T10:28:00',//this.minDate.toLocaleDateString('es-MX'), //Esta fecha es la del dia de la maquina
      fechaCancelacion: '2022-08-26T10:28:00',//date, //Falta validar fecha mayor al dia actual
      estatus: "Pendiente",
      cve_usuario: String(this.agenteID) //Se obtiene del direcotrio activo


    };
    console.log( this.inputs_asigandos )
    this.validacionDatos(this.inputs_asigandos)
  }



  validacionDatos(datos: any) {
    this.formulario_valido = true;
    let claves = Object.keys(datos);
    for (let i of claves) {

      if (datos[i] == undefined || datos[i] == "undefined") {
        this.showErrorViaToast()
        this.formulario_valido = false

      }

      this.confirmacion = [
        { key: 'Tipo de cancelación:', value: this.input_tipoCancelacion },
        { key: 'Cuenta:', value: this.input_numeroCuenta },
        { key: 'Numero de orden:', value: this.input_ordenServicio },
        { key: 'País:', value: this.input_pais },
        { key: 'Fecha de corte:', value: new Date(this.input_fechaCancelacion).toLocaleDateString() }
      ]
    }
  }

  //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ API ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬


  getTry() {

    this.service_api.getTry('/Formularios/ObtenerCuenta').subscribe(data => {
      console.log('RESPUESTA DE LA API:  \n', data)
    });
  }

  postTry(myValues: any) {
    console.log(myValues)
    this.service_api.postTry('/Formularios/GuardarFormulario', myValues).subscribe(res => {
      console.log('ENVIADO: \n', res)
    });
  }

  //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ MENSAJES ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  showErrorViaToast() {
    console.log('ERROR')
    this.messageService.add({key: 'tst', severity: 'error', summary: 'Faltan datos', detail: 'Ingrese todos todos los campos' });
  }
  load(index: number) {
    this.validador[index] = true;
    setTimeout(() => this.validador[index] = false, 1000);
}
}
