import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { AgmDirectionModule} from 'agm-direction'; // agm-direction

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({ //@agm/core
      apiKey: 'AIzaSyA22N1HNK08cEzUZAlF49E9WaDHRzb2pQc'
    }),
    AgmDirectionModule //agm-direction
     ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
