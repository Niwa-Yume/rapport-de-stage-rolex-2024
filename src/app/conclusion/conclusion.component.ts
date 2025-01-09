import { Component } from '@angular/core';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent {
  numImages: number = 250; // Number of images
  currentIndex: number = 0;
  intervalId: any;

  get currentImage(): string {
    // Pad the current index with zeros, format: 000 to 249
    const indexStr = this.currentIndex.toString().padStart(3, '0');
    return `https://media.rolex.com/image/upload/c_limit,w_960/q_auto:low,f_auto/v1/catalogue/2024/360/52450-52461/52450-52461--${indexStr}.webp`;
  }

  startRotation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.numImages;
      if (this.currentIndex === this.numImages - 1) {
        clearInterval(this.intervalId);
      }
    }, 100); // Adjust the time interval for the rotation speed
  }
}
