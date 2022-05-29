import { Injectable, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { buffer, map } from 'rxjs/operators';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify Service is Ready!");
   };

   token:string | undefined;

  getTokenProm():Promise<any>{
    const clientID='437c9d932f16433eb265f90c804c7a29';
    const clientSecret='c2835c06dc704f6ba10b55bc0605112e';
    const url='https://accounts.spotify.com/api/token';

    let body = new URLSearchParams();
    body.set('grant_type', 'client_credentials')

    let headers = new HttpHeaders().set('Authorization','Basic '+btoa(clientID+':'+ clientSecret)).set('Content-Type','application/x-www-form-urlencoded');
    
    return this.http.post<any>(url,body,{headers:headers}).toPromise().then((data)=>{
      this.token=data.access_token
    }).catch();
  }

  getToken(){
    return 'Bearer '+this.token;
  }

  getQuery (query:string) : any;

  getQuery (query:string, headers:HttpHeaders) : any;

  getQuery (query: string, headersOver?:HttpHeaders){
    const url = `https://api.spotify.com/v1/${ query }`;
    
    if(query && headersOver){
      return this.http.get(url,{headers:headersOver});
    }else{
      let headers = new HttpHeaders({'Authorization' : this.getToken()});
      return this.http.get(url,{headers:headers});
    }
  }

   getReleases(){
     console.log('getReleases')
     return this.getQuery(`browse/new-releases?limit=50`);
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


    //====================================================================================================================
    //public credentials = {
    //   clientId: '437c9d932f16433eb265f90c804c7a29',
    //   clientSecret: 'c2835c06dc704f6ba10b55bc0605112e',
    //   accessToken: ''
    // };
  
    // public poolUrls = {
    //   authorize: 'https://accounts.spotify.com/es/authorize?response_type=token'+
    //     '&redirect_uri='+ encodeURIComponent('http://localhost:4200/callback') +
    //     '&client_id='+ this.credentials.clientId + 
    //     '&expires_in=3600',
    //   refreshAccessToken: 'https://accounts.spotify.com/api/token'
    // };
  
   
  
    // upDateToken(){
    //   this.credentials.accessToken = sessionStorage.getItem('token') || '';
    // }
  
     
     
    //  checkTokenSpoLogin(){
    //     this.checkTokenSpo() || (sessionStorage.setItem('refererUrl', location.href), window.location.href = this.poolUrls.authorize);
    //  }
  
    //  checkTokenSpo(){
    //    return !!this.credentials.accessToken;
    //  }
  
    //  tokenRefreshUrl(){
    //    this.checkTokenSpo() && alert('Expiro la sesión');
  
    //    this.credentials.accessToken = '';
    //    sessionStorage.removeItem('token');
    //    this.checkTokenSpoLogin();
    //  }
}
