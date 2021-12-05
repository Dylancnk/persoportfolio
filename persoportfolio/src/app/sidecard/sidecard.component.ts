import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidecard',
  templateUrl: './sidecard.component.html',
  styleUrls: ['./sidecard.component.scss']
})
export class SidecardComponent implements OnInit {
  
  overlaid: boolean = false;

  myLinkedin = 'https://www.linkedin.com/in/dylan-cheong-nam-kwong-910516143/';
  myFacebook = 'https://www.facebook.com/ed.cheong.37';
  myGithub = 'https://github.com/Dylancnk';

  constructor() { }

  ngOnInit(): void {
  
  }

  ScrollIntoView(elem: string | any) {
    document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  onProfileHover() {
    this.overlaid = !this.overlaid;
  }

  onClick(website: string) {
    window.open(website);
  }
}
