import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular 5';

  
  //initial center position
  lat: Number = 24.799448;
  lng: Number = 120.979021;
  //google maps zoom
  zoom: Number = 14;

//Get Directions
  dir = undefined;
  public getDirection() {
    this.dir = {
      origin: { lat: 24.799448, lng: 120.979021 },
      destination: { lat: 24.799524, lng: 120.975017 }
    }
  }

}


