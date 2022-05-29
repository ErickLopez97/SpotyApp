import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any = {};
  loadingArtist = false;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.spotify.getTokenProm().then(token=>{
      this.router.params.subscribe(params => {
        this.getArtista(params ['id']);
        this.getTopTracks(params ['id']);
      });
      this.loadingArtist = true;
    })
   }

  ngOnInit(): void {
  }

  getArtista(id: string){
    this.loadingArtist = true;
    this.spotify.getArtista(id)
    .subscribe((artista:any) => {
        console.log(artista);
        this.artista = artista;
        this.loadingArtist = false;
      });
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks(id)
      .subscribe((topTracks:any) => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
