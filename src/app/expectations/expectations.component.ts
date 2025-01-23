// expectations.component.ts
import {AfterViewInit, Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-expectations',
  templateUrl: './expectations.component.html',
  styleUrls: ['./expectations.component.css']
})
export class ExpectationsComponent implements AfterViewInit {
  showExpectations = false;
  showReality = false;

  toggleExpectations() {
    this.showExpectations = !this.showExpectations;
    this.showReality = false;
  }

  toggleReality() {
    this.showReality = !this.showReality;
    this.showExpectations = false;
  }
  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    if (this.showExpectations) {
      this.showExpectations = false;
    }
    if (this.showReality) {
      this.showReality = false;
    }
  }

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
