import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];
  constructor(private router: Router) { 
    console.log("TarjetasComponent")
  }

  ngOnInit(): void {
  }

  verArtista( item : any){
    let artistaId;
    console.log("Item a mostrar")
    console.log(item.type)
    if(item.type === 'artists'){
      console.log("Solo item")
      artistaId = item.artist[0].id;
    }else{
      console.log(item.artists)
      artistaId = item.artists["0"].id;
    }
    this.router.navigate(['/artists',artistaId]);
  }
}