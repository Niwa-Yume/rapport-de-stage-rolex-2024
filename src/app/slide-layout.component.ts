import {Component, OnInit} from '@angular/core';
import { Router, RouterOutlet, RouterModule, NavigationStart, NavigationEnd, Event } from '@angular/router';
import { CommonModule } from '@angular/common';

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
        <button (click)="previousSlide()" [disabled]="previousDisabled">Précédent</button>
        <button (click)="nextSlide()" [disabled]="nextDisabled">Suivant</button>
      </nav>

      <div *ngIf="isLoading" class="terminal-loader ">
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

      <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5 text-white taille-menu">
          <li><a routerLink="/" routerLinkActive="active" (click)="closeMenu()">Accueil</a></li>
          <li><a routerLink="/app-toc" routerLinkActive="active" (click)="closeMenu()">Table des matières</a></li>
          <li><a routerLink="/about-rolex" routerLinkActive="active" (click)="closeMenu()">À propos de Rolex</a></li>
          <li><a routerLink="/app-mission" routerLinkActive="active" (click)="closeMenu()">Ma mission</a></li>
          <li><a routerLink="/tech-stack" routerLinkActive="active" (click)="closeMenu()">Tech stack</a></li>
          <li><a routerLink="/app-mes-travaux" routerLinkActive="active" (click)="closeMenu()">Mes travaux</a></li>
          <li><a routerLink="/app-expectations" routerLinkActive="active" (click)="closeMenu()">Attente et Réalité</a></li>
          <li><a routerLink="/app-conclusion" routerLinkActive="active" (click)="closeMenu()">Conclusion</a></li>
        </ul>
      </nav>
    </div>
  `,
  styles: [`
    .slide-container {
      height: 80vh;
      display: flex;
      flex-direction: column;
      position: relative;
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
      0%, 10% {
        width: 0;
      }
      45%, 55% {
        width: 6.2em;
      }
      90%, 100% {
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
      width: 20em;
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
      height: 1.3em;
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



    @media (max-width: 600px) {
      .terminal-loader {
        font-size: 1.2em;
        padding: 1em;
        width: 12em;
        margin: 50% auto;
      }

      .terminal-header {
        height: 1em;
        padding: 0 0.3em;
      }

      .control {
        width: 0.5em;
        height: 0.5em;
        margin-left: 0.3em;
      }

      .terminal-title {
        font-size: 0.8em;
      }
    }

    h1 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 7vw;
      line-height: 1;
      text-align: center;
      -webkit-text-stroke: 2px #ffeba7;
      text-stroke: 2px #ffeba7;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      color: transparent;
    }

    [type="checkbox"]:checked,
    [type="checkbox"]:not(:checked) {
      position: absolute;
      left: -9999px;
    }

    .menu-icon:checked + label,
    .menu-icon:not(:checked) + label {
      position: fixed;
      top: 63px;
      right: 75px;
      display: block;
      width: 30px;
      height: 30px;
      padding: 0;
      margin: 0;
      cursor: pointer;
      z-index: 10;
    }

    .menu-icon:checked + label:before,
    .menu-icon:not(:checked) + label:before {
      position: absolute;
      content: '';
      display: block;
      width: 30px;
      height: 20px;
      z-index: 20;
      top: 0;
      left: 0;
      border-top: 2px solid #ececee;
      border-bottom: 2px solid #ececee;
      transition: border-width 100ms 1500ms ease,
      top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
      height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
      background-color 200ms ease,
      transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .menu-icon:checked + label:after,
    .menu-icon:not(:checked) + label:after {
      position: absolute;
      content: '';
      display: block;
      width: 22px;
      height: 2px;
      z-index: 20;
      top: 10px;
      right: 4px;
      background-color: #ececee;
      margin-top: -1px;
      transition: width 100ms 1750ms ease,
      right 100ms 1750ms ease,
      margin-top 100ms ease,
      transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .menu-icon:checked + label:before {
      top: 10px;
      transform: rotate(45deg);
      height: 2px;
      background-color: #ececee;
      border-width: 0;
      transition: border-width 100ms 340ms ease,
      top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
      height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
      background-color 200ms 500ms ease,
      transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .menu-icon:checked + label:after {
      width: 30px;
      margin-top: 0;
      right: 0;
      transform: rotate(-45deg);
      transition: width 100ms ease,
      right 100ms ease,
      margin-top 100ms 500ms ease,
      transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .nav {
      position: fixed;
      top: 33px;
      right: 50px;
      display: block;
      width: 80px;
      height: 80px;
      padding: 0;
      margin: 0;
      z-index: 9;
      overflow: hidden;
      box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);
      background-color: var(--rolex-green);
      animation: border-transform 7s linear infinite;
      transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
      right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 250ms 1100ms ease,
      width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
      height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    @keyframes border-transform {
      0%, 100% {
        border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
      }
      14% {
        border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
      }
      28% {
        border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
      }
      42% {
        border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
      }
      56% {
        border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
      }
      70% {
        border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
      }
      84% {
        border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
      }
    }

    .menu-icon:checked ~ .nav {
      animation-play-state: paused;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      width: 200%;
      height: 200%;
      transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
      right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
      transform 250ms 700ms ease,
      width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1),
      height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .nav ul {
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
      z-index: 6;
      text-align: center;
      transform: translateY(-50%);
      list-style: none;
    }

    .nav ul li {
      position: relative;
      display: block;
      width: 100%;
      padding: 0;
      margin: 10px 0;
      text-align: center;
      list-style: none;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      transform: translateY(30px);
      transition: all 250ms linear;
    }

    .nav ul li:nth-child(1) {
      transition-delay: 300ms;
    }

    .nav ul li:nth-child(2) {
      transition-delay: 275ms;
    }

    .nav ul li:nth-child(3) {
      transition-delay: 250ms;
    }

    .nav ul li:nth-child(4) {
      transition-delay: 225ms;
    }

    .nav ul li:nth-child(5) {
      transition-delay: 200ms;
    }

    .nav ul li:nth-child(6) {
      transition-delay: 175ms;
    }

    .nav ul li:nth-child(7) {
      transition-delay: 150ms;
    }

    .nav ul li a {
      font-family: 'Montserrat', sans-serif;
      font-size: 5vh;
      text-transform: uppercase;
      line-height: 1.2;
      font-weight: 800;
      display: inline-block;
      position: relative;
      color: #ececee;
      transition: all 250ms linear;
    }

    .nav ul li a:hover {
      text-decoration: none;
      color: #ffeba7;
    }

    .nav ul li a:after {
      display: block;
      position: absolute;
      top: 50%;
      content: '';
      height: 2vh;
      margin-top: -1vh;
      width: 0;
      left: 0;
      opacity: 0.8;
      transition: width 250ms linear;
    }

    .nav ul li a:hover:after {
      width: 100%;
    }

    .menu-icon:checked ~ .nav ul li {
      pointer-events: auto;
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      transition: opacity 350ms ease, transform 250ms ease;
    }

    .menu-icon:checked ~ .nav ul li:nth-child(1) {
      transition-delay: 1400ms;
    }

    .menu-icon:checked ~ .nav ul li:nth-child(2) {
      transition-delay: 1480ms;
    }

    .menu-icon:checked ~ .nav ul li:nth-child(3) {
      transition-delay: 1560ms;
    }

    .menu-icon:checked ~ .nav ul li:nth-child(4) {
      transition-delay: 1640ms;
    }

    .menu-icon:checked ~ .nav ul li:nth-child(5) {
      transition-delay: 1720ms;
    }

    .menu-icon:checked ~ .nav ul li:nth-child(6) {
      transition-delay: 1800ms;
    }

    .menu-icon:checked ~ .nav ul li:nth-child(7) {
      transition-delay: 1880ms;
    }

    .logo img {
      height: 26px;
      width: auto;
      display: block;
    }

    @media screen and (max-width: 991px) {
      .menu-icon:checked + label,
      .menu-icon:not(:checked) + label {
        right: 55px;
      }

      .nav {
        right: 30px;
      }

      h1 {
        font-size: 9vw;
        -webkit-text-stroke: 2px transparent;
        text-stroke: 2px transparent;
        -webkit-text-fill-color: #ffeba7;
        text-fill-color: #ffeba7;
        color: #ffeba7;
      }

      .nav ul li a {
        font-size: 8vh;
      }
    }
  `]
})
export class SlideLayoutComponent implements OnInit {
  isLoading = false;
  previousDisabled = true;
  nextDisabled = false;
  slides = [
    '',
    'about-rolex',
    'app-toc',
    'app-mission',
    'tech-stack',
    'app-mes-travaux',
    'app-expectations',
    'app-conclusion'
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.isLoading = false;
        }, 4000); // small delay to simulate loading duration
        this.updateButtonState();
      }
    });
  }

  ngOnInit() {
    this.updateButtonState();
  }

  getCurrentSlideIndex(): number {
    const currentPath = this.router.url.slice(1);
    return this.slides.indexOf(currentPath);
  }

  updateButtonState() {
    const currentIndex = this.getCurrentSlideIndex();
    this.previousDisabled = currentIndex === 0;
    this.nextDisabled = currentIndex === this.slides.length - 1;
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

  closeMenu() {
    const menuIcon: HTMLElement | null = document.getElementById('menu-icon');
    if (menuIcon) {
      (menuIcon as HTMLInputElement).checked = false;
    }
  }
}
