import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule, NavigationStart, NavigationEnd, Event } from '@angular/router';
import { CommonModule } from '@angular/common';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-slide-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  template: `
    <div class="slide-container">
      <div class="slide-content" *ngIf="!isLoading">
        <router-outlet></router-outlet>
      </div>

      <nav class="nav-buttons">
        <button (click)="previousSlide()">Précédent</button>
        <button (click)="nextSlide()">Suivant</button>
      </nav>

      <div *ngIf="isLoading" class="terminal-loader">
        <div class="terminal-header">
          <div class="terminal-title">Status</div>
          <div class="terminal-controls">
            <div class="control close"></div>
            <div class="control minimize"></div>
            <div class="control maximize"></div>
          </div>
        </div>
        <div class="text">Loading...</div>
      </div>

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
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 1rem;
    }
    @keyframes blinkCursor {
      50% {
        border-right-color: transparent;
      }
    }

    @keyframes typeAndDelete {
      0%,
      10% {
        width: 0;
      }
      45%,
      55% {
        width: 6.2em;
      } /* adjust width based on content */
      90%,
      100% {
        width: 0;
      }
    }

    .terminal-loader {
      border: 0.1em solid #333;
      background-color: #1a1a1a;
      color: #0f0;
      font-family: "Courier New", Courier, monospace;
      font-size: 2.5em;
      padding: 2.5em 1.5em;
      width: 24em;
      margin: 250px auto;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
    }

    .terminal-header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1.5em;
      background-color: #333;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      padding: 0 0.4em;
      box-sizing: border-box;
    }

    .terminal-controls {
      float: right;
    }

    .control {
      display: inline-block;
      width: 0.6em;
      height: 0.6em;
      margin-left: 0.4em;
      border-radius: 50%;
      background-color: #777;
    }

    .control.close {
      background-color: #e33;
    }

    .control.minimize {
      background-color: #ee0;
    }

    .control.maximize {
      background-color: #0b0;
    }

    .terminal-title {
      float: left;
      line-height: 1.5em;
      color: #eee;
    }

    .text {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      border-right: 0.2em solid green; /* Cursor */
      animation: typeAndDelete 4s steps(11) infinite,
      blinkCursor 0.5s step-end infinite alternate;
      margin-top: 1.5em;
    }
  `]
})
export class SlideLayoutComponent {
  isLoading = false;
  slides = [
    '',
    'tech-stack',
    'app-mission',
    'about-rolex',
    'app-expectations',
    'app-mes-travaux',
    'app-conclusion'
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.isLoading = false;
        }, 4000); // petti délai pour augmenter le temps d'affichage du loader
      }
    });
  }

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
