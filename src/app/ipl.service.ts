import { Injectable } from '@angular/core';


@Injectable({providedIn:'root'})
export class IplService {
  baseUrl="http://192.168.137.121:5000/ipl/";

  constructor(private http:HttpClient) { }

  teamLabels():Observable<any>{
    let url=`${this.baseUrl}labels`;
    return this.http.get(url);
  }

}