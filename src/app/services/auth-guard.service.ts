import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private _SpotifyService: SpotifyService) { }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

  //     this._SpotifyService.checkTokenSpoLogin();
  //     return this._SpotifyService.checkTokenSpo();
  //   }
}
