import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about-rolex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-rolex.component.html',
  styleUrls: ['./about-rolex.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInUp', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition(':enter', animate('600ms ease-out'))
    ]),
    trigger('slideSection', [
      state('void', style({ opacity: 0, transform: 'translateX(-100px)' })),
      transition(':enter', animate('500ms 300ms ease-out'))
    ])
  ]
})
export class AboutRolexComponent implements OnInit{
  ngOnInit() {
    console.log('Timeline events:', this.timelineEvents);
  }
  
  readonly timelineEvents = [
    { year: 1905, event: 'Fondation de Rolex par Hans Wilsdorf' },
    { year: 1915, event: 'Brevet du système de remontage automatique' },
    { year: 1985, event: 'Utilisation pionnière du saphir synthétique' },
    { year: 2012, event: 'Lancement du système Syloxi en silicium' },
    { year: 2020, event: 'Nouveaux processus de production automatisés' }
 ];
  activeSection = '';

  onIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.activeSection = entry.target.id;
        entry.target.classList.add('visible');
      }
    });
  }

  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    document.documentElement.style.setProperty('--scroll', `${scrollPosition}`);
  }
}