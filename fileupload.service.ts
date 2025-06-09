import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

 // API url

 private baseURL="http://localhost:8080/employee";
  httpClient: any;
 constructor(private http:HttpClient) { }
 
 // Returns an observable

 onFileSelected(employee:Employee):Observable<Object>{
  return this.httpClient.post((this.baseURL+'/employee/upload'),employee);

  console.log("this is call 6/8/23")
}
}
