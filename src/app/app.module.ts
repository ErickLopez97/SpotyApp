import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SharedComponent } from './components/shared/shared.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomsdeguroPipe } from './pipes/domsdeguro.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, ROUTES } from '@angular/router';
import { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
    ArtistaComponent,
    HomeComponent,
    SearchComponent,
    SharedComponent,
    NavbarComponent,
    LoadingComponent,
    DomsdeguroPipe,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
