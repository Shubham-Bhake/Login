import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject,tap } from 'rxjs';
import { environment } from '../model/environment';
import { ReportFeedback } from '../model/ReportFeedback';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiurl = environment.apiURL+'/reports';

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh(){
    return this._refreshrequired;
  }

  constructor(private http: HttpClient) {

  }
  GetAllFeedBack(): Observable<ReportFeedback> {
    return this.http.get<ReportFeedback>(this.apiurl);
  }

  GetFeedBack(feedbackId: string): Observable<ReportFeedback> {
    const finalUrl = this.apiurl+'/'+feedbackId;
    console.log('finalUrl '+finalUrl)
    return this.http.get<ReportFeedback>(finalUrl);
  }

  GetAllFeedBacks(): Observable<Array<ReportFeedback>> {
    return this.http.get<Array<ReportFeedback>>(this.apiurl);
  }























  
//   GetEmployeebycode(code:any){
//     return this.http.get(this.apiurl);
//   }
//   Remove(code:any){
//     return this.http.delete(this.apiurl+'/'+code);
//   }
//   Save(inputdata:any){
//     return this.http.post(this.apiurl,inputdata).pipe(
//       tap(()=>{
// this.RequiredRefresh.next();
//       })
//     );
//   }

//   GetDes(){
//     return this.http.get('https://localhost:44308/Designation');
//   }
}
