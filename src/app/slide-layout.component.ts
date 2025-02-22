import {Component, HostListener, OnInit} from '@angular/core';
import { Router, RouterOutlet, RouterModule, NavigationStart, NavigationEnd, Event } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  template: `
    <div class="slide-container ">
      <div class="slide-content" *ngIf="!isLoading">
        <router-outlet></router-outlet>
      </div>
      <!-- BOUTON DE NAVIGATION --->
      <nav class="nav-buttons">
        <button (click)="previousSlide()" [disabled]="previousDisabled">Précédent</button>
        <button (click)="nextSlide()" [disabled]="nextDisabled">Suivant</button>
      </nav>

      <!-- LOADER --->
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


      <!-- MENU DE NAVIGATION --->
      <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
      <label for="menu-icon"></label>
      <nav class="nav z-20 ">
        <ul class="pt-5 text-white taille-menu">
          <li><a routerLink="/" routerLinkActive="active" (click)="closeMenu()">Accueil</a></li>
          <li><a routerLink="/about-rolex" routerLinkActive="active" (click)="closeMenu()">À propos de Rolex</a></li>
          <li><a routerLink="/app-mission" routerLinkActive="active" (click)="closeMenu()">Ma mission</a></li>
          <li><a routerLink="/tech-stack" routerLinkActive="active" (click)="closeMenu()">Stack technologique</a></li>
          <li><a routerLink="/app-mes-travaux" routerLinkActive="active" (click)="closeMenu()">Mes travaux</a></li>
          <li><a routerLink="/app-expectations" routerLinkActive="active" (click)="closeMenu()">Les attentes et la réalité</a></li>
          <li><a routerLink="/app-impact" routerLinkActive="active" (click)="closeMenu()">Les impacts du stage</a></li>
          <li><a routerLink="/app-ps" routerLinkActive="active" (click)="closeMenu()">Info sur le rapport de stage</a></li>
          <li><a routerLink="/app-conclusion" routerLinkActive="active" (click)="closeMenu()">Conclusion</a></li>
        </ul>
      </nav>
    </div>
  `,
  styles: [`
    .slide-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .slide-content {
      flex: 1;
    }

    .nav-buttons {
      position: fixed;
      bottom: 1.2rem;
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

    .text {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      border-right: 0.2em solid green;
      animation: typeAndDelete 4s steps(11) infinite, blinkCursor 0.5s step-end infinite alternate;
    }

    h1 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 7vw;
      line-height: 1;
      text-align: center;
      -webkit-text-stroke: 2px #ffeba7;
      -webkit-text-fill-color: transparent;
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
      0%, 100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
      14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; }
      28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; }
      42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; }
      56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; }
      70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; }
      84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; }
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
      margin-bottom: 1.25rem;
    }

    .nav ul li:last-child {
      margin-bottom: 0;
    }

    .nav ul li:nth-child(1) { transition-delay: 300ms; }
    .nav ul li:nth-child(2) { transition-delay: 275ms; }
    .nav ul li:nth-child(3) { transition-delay: 250ms; }
    .nav ul li:nth-child(4) { transition-delay: 225ms; }
    .nav ul li:nth-child(5) { transition-delay: 200ms; }
    .nav ul li:nth-child(6) { transition-delay: 175ms; }
    .nav ul li:nth-child(7) { transition-delay: 150ms; }
    .nav ul li:nth-child(8) { transition-delay: 125ms; }
    .nav ul li:nth-child(9) { transition-delay: 100ms; }

    .nav ul li a {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.2rem;
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

    .menu-icon:checked ~ .nav ul li:nth-child(1) { transition-delay: 1400ms; }
    .menu-icon:checked ~ .nav ul li:nth-child(2) { transition-delay: 1480ms; }
    .menu-icon:checked ~ .nav ul li:nth-child(3) { transition-delay: 1560ms; }
    .menu-icon:checked ~ .nav ul li:nth-child(4) { transition-delay: 1640ms; }
    .menu-icon:checked ~ .nav ul li:nth-child(5) { transition-delay: 1720ms; }
    .menu-icon:checked ~ .nav ul li:nth-child(6) { transition-delay: 1800ms; }
    .menu-icon:checked ~ .nav ul li:nth-child(7) { transition-delay: 1880ms; }
    .menu-icon:checked ~ .nav ul li:nth-child(8) { transition-delay: 1960ms; }
    .menu-icon:checked ~ .nav ul li:nth-child(9) { transition-delay: 2040ms; }

    /* Breakpoint pour écrans de 1024px */
    @media screen and (max-width: 1024px) {
      .nav ul li a {
        font-size: 1rem;
      }
      .slide-container {
        height: 60vh;
        display: flex;
        flex-direction: column;
        position: relative;
      }
      .terminal-loader {
        font-size: 2em;
        width: 16em;
        margin: 150px auto;
      }

      .menu-icon:checked + label,
      .menu-icon:not(:checked) + label {
        right: 65px;
        top: 50px;
      }

      .nav {
        right: 40px;
        top: 25px;
        width: 70px;
        height: 70px;
      }

      h1 {
        font-size: 8vw;
      }
    }

    /* Breakpoint pour tablettes */
    @media screen and (max-width: 991px) {
      .menu-icon:checked + label,
      .menu-icon:not(:checked) + label {
        right: 45px;
        top: 45px;
      }

      .nav {
        right: 25px;
        width: 60px;
        height: 60px;
      }

      .nav ul li a {
        font-size: 0.9rem;
      }

      h1 {
        font-size: 9vw;
        -webkit-text-stroke: 2px transparent;
        text-stroke: 2px transparent;
        -webkit-text-fill-color: #ffeba7;
        text-fill-color: #ffeba7;
        color: #ffeba7;
      }

      .terminal-loader {
        font-size: 1.5em;
        width: 14em;
        margin: 100px auto;
      }
    }

    /* Breakpoint pour mobiles */
    @media screen and (max-width: 600px) {
      .terminal-loader {
        font-size: 1em;
        padding: 1em;
        width: 12em;
        margin: 50% auto;
      }

      .terminal-header {
        height: 1em;
        padding: 0 0.3em;
      }

      .control {
        width: 0.4em;
        height: 0.4em;
        margin-left: 0.2em;
      }

      .nav ul li a {
        font-size: 0.8rem;
      }

      .menu-icon:checked + label,
      .menu-icon:not(:checked) + label {
        right: 35px;
        top: 35px;
        width: 25px;
        height: 25px;
      }

      .nav {
        right: 20px;
        width: 50px;
        height: 50px;
      }

      .nav-buttons {
        bottom: 1rem;
        gap: 0.5rem;
      }

      .nav-buttons button {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
      }
    }
  `]
})
export class SlideLayoutComponent implements OnInit {
  isLoading = true;
  initialLoading = false;
  firstLoad = true;
  previousDisabled = true;
  nextDisabled = false;
  slides = [
    '',
    'about-rolex',
    'app-mission',
    'tech-stack',
    'app-mes-travaux',
    'app-expectations',
    'app-impact',
    'app-ps',
    'app-conclusion'
  ];


  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (this.firstLoad) {
          this.isLoading = true;
        }
      } else if (event instanceof NavigationEnd) {
        if (this.firstLoad) {
          setTimeout(() => {
            this.isLoading = false;
            this.initialLoading = false;
          }, 2000);
          this.firstLoad = false;
        }
        this.updateButtonState();
      }
    });
  }

  ngOnInit() {
    this.initialLoading = true;
    this.updateButtonState();
  }
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' && !this.nextDisabled) {
      this.nextSlide();
    } else if (event.key === 'ArrowLeft' && !this.previousDisabled) {
      this.previousSlide();
    }
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
