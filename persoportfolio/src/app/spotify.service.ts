import { Injectable } from '@angular/core';
import {Http} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private clientId:string = '2c7e6afa8e5c4c81b264921cd4082f27';
  private artistUrl:string = 'https://api.spotify.com/v1/search?type=artist&&limit=10&client_id='+this.clientId+'&q=';

  constructor(private http:Http) { }

  searchArtists(searchterm: string){
    let url = this.artistUrl + searchterm;
  }
}
