import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http:HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get("./assets/car.json");    
  }

  getBooks() :Observable<any> {
    return this.http.get("./assets/library.json");
  }
}