import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domsdeguro'
})
export class DomsdeguroPipe implements PipeTransform {
  
  constructor(private domSanitizer: DomSanitizer){}

  transform(value: string): any {
    const url = "https://api.spotify.com/v1/";
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
