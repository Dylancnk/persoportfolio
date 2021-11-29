import { Injectable } from '@angular/core';
import {HttpClient, HttpBackend} from '@angular/common/http';
import 'rxjs/Rx';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private clientId:string = '2c7e6afa8e5c4c81b264921cd4082f27';
  private artistUrl:string = 'https://api.spotify.com/v1/search?type=artist&&limit=10&client_id='+this.clientId+'&q=';

  constructor(private http:HttpClient) { }

  searchArtists(searchterm: string){
    let url = this.artistUrl + searchterm;
    return this.http.get(url).pipe(map((res:any) => res.json()));
  }
}
