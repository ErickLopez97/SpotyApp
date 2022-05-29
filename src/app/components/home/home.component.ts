import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading: boolean;
  error: boolean;
  NuevasCanciones : any[] = [];
  mensajeError: string = '';
  
  ngOnInit(): void {
  }

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    
    this.spotify.getTokenProm().then(token=>{
      this.spotify.getReleases()
      .subscribe((data:any) => {
        this.NuevasCanciones = data["albums"].items;
        //this.NuevasCanciones = data;
        this.loading = false;
        console.log("this.spotify.getReleases")
        console.log(data)
      },(errorServicio:any) => {
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.mensage;
      })
    });
   }
}
