import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {
  numImages: number = 250;
  currentIndex: number = 0;
  intervalId: any;

  get currentImage(): string {
    const indexStr = this.currentIndex.toString().padStart(3, '0');
    return `https://media.rolex.com/image/upload/c_limit,w_960/q_auto:low,f_auto/v1/catalogue/2024/360/52450-52461/52450-52461--${indexStr}.webp`;
  }

  ngOnInit(): void {
    this.startRotation();
  }

  startRotation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.numImages;
    }, 100); // temps d'interval permet de gérer la vitesse de rotation
  }
}
