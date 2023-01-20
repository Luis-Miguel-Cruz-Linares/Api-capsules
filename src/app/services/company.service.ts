import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {
    console.log('Servicio HTTP: ');
   }

   getInfo(): any {
    return this.http.get ('https://api.spacexdata.com/v4/capsules');
   }
}
