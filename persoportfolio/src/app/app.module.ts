import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidecardComponent } from './sidecard/sidecard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ServicesComponent } from './services/services.component';
import { HobbyComponent } from './hobby/hobby.component';
import { SpotifyService } from './spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    SidecardComponent,
    HomeComponent,
    AboutComponent,
    ExperiencesComponent,
    ServicesComponent,
    HobbyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot()
  ],
  providers: [SpotifyService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
