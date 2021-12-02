import { Injectable } from '@angular/core';
import {HttpClient, HttpBackend} from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private clientId:string = '2c7e6afa8e5c4c81b264921cd4082f27';
  private artistsUrl:string = 'https://api.spotify.com/v1/search?type=artist&&limit=10&client_id='+this.clientId+'&q=';
  private artistToBeDisplayedUrl:string ='';
  private albumsUrl:string ='';

  constructor(private http:HttpClient) { }

  searchArtists(searchterm: string){
    let url = this.artistsUrl + searchterm;
    return this.http.get(url).pipe(map((res:any) => res.json()));
  }

  getArtist(id: string){
    this.artistToBeDisplayedUrl = 'https://api.spotify.com/v1/artists/'+id;
    return this.http.get(this.artistToBeDisplayedUrl).pipe(map((res:any) => res.json()));
  }
}
