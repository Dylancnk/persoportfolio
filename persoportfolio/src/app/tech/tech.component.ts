import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  constructor() { }

  angularWebsite = 'https://angular.io/';
  typescriptWebsite = 'https://www.typescriptlang.org/';
  bootstrapWebsite = 'https://getbootstrap.com/';
  firebaseWebsite = 'https://firebase.google.com/';

  ngOnInit(): void {
  }

  onClick(website:string){
    window.open(website);
  }

}
