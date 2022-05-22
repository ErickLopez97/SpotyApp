import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify Service is Ready!");
   }

   getQuery (query: string){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({'Authorization':'Bearer BQC1kLHy0lg7pkLjxApKYTa47Xu7HpezwDgeT0bIzCcXfH8bnNBcJ20iPKfHVq1WjZnZiJdLzDsmkAebByjA_8y7Fa7pDDW7jg3Jh4rk-kNn1LPsIiDQry-Mpy2aYMR9nwaIzh6zxQsdOsxQ71zZYG5Cd18Wc08rXEk'});

     return this.http.get(url, {headers: headers});
   }

   getReleases(){
     console.log('getReleasese')
     return this.getQuery("browse/new-releases?limit=50")
     //return this.getQuery("browse/new-releases")
     //.pipe(map((data:any) => data.albums.items));
   }

   getArtistas( termino: string){
     return this.getQuery(`search?q=${ termino }&type=artist&limited=50`)
      .pipe(map((data:any) => {
       return data.artists.items;
     }));
   }

   getArtista(id:string){
     return this.getQuery(`artists/${ id }`);
   }

   //getTopTracks
  getTopTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?market=ES`);
    //.pipe(map((data:any) => {
    //  return data["tracks"];
    //}));
  }
}
