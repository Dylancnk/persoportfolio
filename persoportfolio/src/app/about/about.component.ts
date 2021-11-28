import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  toggleMessage: string = "Show More";
  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow() {
    this.isCollapsed = !this.isCollapsed;

    if (this.isCollapsed) {
      this.toggleMessage = "Show More";
    }
    else{
      this.toggleMessage = "Show Less";
    }
  }
}
