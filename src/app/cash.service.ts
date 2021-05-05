import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashService {

  readonly APIUrl="http://localhost:55258";

  constructor(private http:HttpClient) { }

  getSegmentList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Segment');
  }

  updateSegment(val:any){
    return this.http.put(this.APIUrl+'/Segment', val);
  }

  getCountryList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Country');
  }

  convert(val:any){
    return this.http.put(this.APIUrl+'/Rate', val);
  }
}