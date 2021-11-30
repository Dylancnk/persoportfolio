import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artists } from '../models/artists';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit {

  id: string | any;
  artist: Artists[] = [];

  constructor(private spotifyService: SpotifyService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .pipe(map(params => params['id']))
    //   .subscribe((id: any) => {
    //     this.spotifyService.getArtist(id)
    //       .subscribe(artist => {
    //         this.artist = artist;
    //       })
    // })

    this.spotifyService.getArtist('5fUnrD4Bwhct3etEOPID7X')
    .subscribe(artist =>{
      console.log('artist ',artist);
    })
  }

}
