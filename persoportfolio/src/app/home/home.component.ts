import { Component, OnInit } from '@angular/core';
declare var require: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor() { }
  
  FileSaver = require('file-saver');

  ngOnInit(): void {

    const typedTextSpan:any = document.querySelector(".typed-text");
    const cursorSpan:any = document.querySelector(".cursor");

    const textArray = ["Full Stack Developer", "UI/UX Engineer", "Music Producer"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingDelay);
      } 

      else {
        cursorSpan.classList.remove("typing");
  	    setTimeout(erase, newTextDelay);
      }
    }    

  function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
}

  downloadPdf() {
    const pdfUrl = './assets/pdf/resume.pdf';
    const pdfName = 'resume';
    this.FileSaver.saveAs(pdfUrl, pdfName);
  }
}