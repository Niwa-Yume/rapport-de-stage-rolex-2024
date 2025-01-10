import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-rolex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-rolex.component.html',
  styleUrls: ['./about-rolex.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutRolexComponent implements OnInit{
  ngOnInit() {
    console.log('Timeline events:', this.timelineEvents);
  }

  readonly timelineEvents = [
    { year: 1908, event: 'Fondation de Rolex par Hans Wilsdorf à Genève, initialement, la société est basée à Londres, Royaume-Uni.' },
    { year: 1919, event: 'En 1919, suite à la Première Guerre mondiale, Hans Wilsdorf prend la décision stratégique de déplacer le siège de Rolex de Londres à Genève, en Suisse.' },
    { year: 1945, event: 'la première montre‑bracelet chronomètre à remontage automatique à afficher la date dans un guichet' },
    { year: 1953, event: 'la Submariner est la première montre de plongée étanche jusqu’à 100 mètres' },
    { year: 1963, event: 'Le Cosmograph Daytona, l’instrument ultime pour tout pilote de course' },
    { year: 1967, event: 'L’année 1967 voit le lancement de la Sea‑Dweller, étanche jusqu’à 610 mètres' },
    { year: 2015, event: 'Toutes les montres Rolex ont reçu la certification Chronomètre Superlatif, redéfinie par Rolex en 2015' },

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
