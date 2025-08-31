import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComplantServiceService {

  constructor(
    private http:HttpClient,
  ) { }

  apiUrl:string = "http://localhost:3000/";

  getRegistrationData(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}Register`,data);
  }
  sendRegistrationData():Observable<any>{
    return this.http.get(`${this.apiUrl}Register`);
  }
  getcomplants(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}newcomplants`,data);
  }
  updatecomplants(id:string, data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}newcomplants/${id}`, data);
  }
  sendcomplants():Observable<any>{
    return this.http.get(this.apiUrl+'newcomplants');
  }
}
