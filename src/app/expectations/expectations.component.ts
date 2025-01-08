import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-expectations',
  templateUrl: './expectations.component.html',
  styleUrls: ['./expectations.component.css']
})
export class ExpectationsComponent implements AfterViewInit {

  ngAfterViewInit() {
    const paragraphs = document.querySelectorAll('.hover-text');
    paragraphs.forEach((p: Element) => {
      const textContent = p.textContent?.trim();
      if (textContent) {
        p.setAttribute('data-text', textContent);
      }
    });
  }

}
