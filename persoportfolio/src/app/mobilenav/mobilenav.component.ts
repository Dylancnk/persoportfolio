import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.scss']
})
export class MobilenavComponent implements AfterViewInit{

  elementSelected: string = '#home';

  aboutOffset:any = null;
  servicesOffset:any  = null;
  experiencesOffset:any = null;
  hobbyOffset:any = null;
  contactOffset:any = null;

  offset = 300;

  constructor() { }
  ngAfterViewInit(): void {
    this.aboutOffset = (document.querySelector<any>('#about').getBoundingClientRect().top + window.pageYOffset) - this.offset;
    this.servicesOffset = (document.querySelector<any>('#services').getBoundingClientRect().top + window.pageYOffset) - this.offset;
    this.experiencesOffset = (document.querySelector<any>('#experiences').getBoundingClientRect().top + window.pageYOffset) - this.offset;
    this.hobbyOffset = (document.querySelector<any>('#hobby').getBoundingClientRect().top + window.pageYOffset) - this.offset;
    this.contactOffset = (document.querySelector<any>('#contact').getBoundingClientRect().top + window.pageYOffset) - this.offset;
  }
  scrollToTop() {
    window.scroll(0, 0);
    this.elementSelected = '#home';
  }

    ScrollIntoView(elem: string | any) {
    window.scrollTo(0,elem)
  }
}
