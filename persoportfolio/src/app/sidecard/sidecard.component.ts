import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidecard',
  templateUrl: './sidecard.component.html',
  styleUrls: ['./sidecard.component.scss']
})
export class SidecardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ScrollIntoView(elem: string | any) {
    document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop(){
    window.scroll(0,0);
  }
}
