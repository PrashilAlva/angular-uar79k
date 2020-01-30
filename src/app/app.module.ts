import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { IplService } from './ipl.service';
import {HttpClientModule} from '@angular/common/http';
const rooutes:Routes=[
{
  path:"",
  component:HomeComponent,
  pathMatch:"full"
},
{
  path:"home",
  component:HomeComponent
},
{path:"team",
component:TeamComponent
}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule ,
  HttpClientModule,

  RouterModule.forRoot(rooutes)
  
  ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, HomeComponent, TeamComponent ],
  bootstrap:    [ AppComponent ],
  providers: [IplService]
})
export class AppModule { }
