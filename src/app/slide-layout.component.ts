import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  template: `
    <div class="slide-container">
      <div class="slide-content">
        <router-outlet></router-outlet>
      </div>
      
      <nav class="nav-buttons">
        <button (click)="previousSlide()">Précédent</button>
        <button (click)="nextSlide()">Suivant</button>
      </nav>
    </div>
  `,
  styles: [`
    .slide-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .slide-content {
      flex: 1;
    }
    .nav-buttons {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
    }
  `]
})
export class SlideLayoutComponent {
  slides = [
    '',  
    'tech-stack',        
    'app-mission',
  
  ];

  constructor(private router: Router) {}

  getCurrentSlideIndex(): number {
    const currentPath = this.router.url.slice(1); 
    return this.slides.indexOf(currentPath);
  }

  previousSlide() {
    const currentIndex = this.getCurrentSlideIndex();
    if (currentIndex > 0) {
      this.router.navigate([this.slides[currentIndex - 1]]);
    }
  }

  nextSlide() {
    const currentIndex = this.getCurrentSlideIndex();
    if (currentIndex < this.slides.length - 1) {
      this.router.navigate([this.slides[currentIndex + 1]]);
    }
  }
}