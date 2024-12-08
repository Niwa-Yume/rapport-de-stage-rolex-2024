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
      height: 80vh;
      display: flex;
      flex-direction: column;
    }
    .slide-content {
      flex: 1;
    }
    .nav-buttons {
  position: fixed; /* Change la position pour qu'elle soit fixe */
  bottom: 2rem; /* Espace depuis le bas de la page */
  left: 50%; /* Centre horizontalement */
  transform: translateX(-50%); /* Ajuste pour centrer */
  display: flex;
  gap: 1rem;
}

  `]
})
export class SlideLayoutComponent {
  slides = [
    '',  
    'tech-stack',        
    'app-mission',
    'about-rolex',
  
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