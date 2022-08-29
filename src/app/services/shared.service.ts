import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {



  readonly APIurl= 'https://localhost:44372/api';
  constructor(
    private http: HttpClient
  ) { }
    
    getTry():Observable<any[]>{
      return this.http.get<any>(this.APIurl+'/Formularios/ObtenerCuenta');
    }

    postTry(values:any):Observable<any>{
      let headers = new HttpHeaders({'Content-Type':'application/json'});
      return this.http.post(this.APIurl+'/Formularios/GuardarFormulario',values,{headers});
    }



}
