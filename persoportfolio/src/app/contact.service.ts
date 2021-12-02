import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  headersReq = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  });

  private api = 'https://formsubmit.co/a85fac2cf2d3db310f426586de039d22'
  constructor(private http:HttpClient) {}
  

  PostMessage(input:any){
    return this.http.post(this.api, input, {responseType: 'text'}).pipe(
      map((response : any) => {
        if(response){
          return response;
        }
        console.log('response ',response);
      }),
      (error:any) =>{
        return error;
      }
    )
  }
}
