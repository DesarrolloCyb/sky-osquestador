import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  APIurl= ' https://localhost:44372/api/Formularios';



  constructor(
    private http: HttpClient
  ) { }

    getTry():Observable<any[]>{
      return this.http.get<any>(this.APIurl);
    }


}
