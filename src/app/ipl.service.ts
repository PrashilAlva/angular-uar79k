import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import  Observable from 'rxjs'

@Injectable({providedIn:'root'})
export class IplService {
  baseUrl="https://ipl-2020.herokuapp.com/ipl/";

  constructor(private http:HttpClient) { }

  teamLabels():Observable<any>{
    let url=`${this.baseUrl}labels`;
    return this.http.get(url);
  }

  getPlaysersByTeamName(teamname):Observable<any>{
    let url=`${this.baseUrl}team/${teamname}`;
    return  this.http.get(url);
  }

}