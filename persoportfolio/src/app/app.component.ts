import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myLinkedin = 'https://www.linkedin.com/in/dylan-cheong-nam-kwong-910516143/';
  myFacebook = 'https://www.facebook.com/ed.cheong.37';
  myGithub = 'https://github.com/Dylancnk';

  onClick(website: string) {
    window.open(website);
  }
}