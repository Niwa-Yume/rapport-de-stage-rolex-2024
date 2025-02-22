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
    { year: 1908, event: "Hans Wilsdorf cherchait un nom pour sa marque de montres. Il raconte souvent cette histoire : ' un matin, un bon génie me souffla : Rolex '"},
    { year: 1919, event: 'Suite à la Première Guerre mondiale, Hans Wilsdorf prend la décision stratégique de déplacer le siège de Rolex de Londres à Genève, en Suisse.' },
    { year: 1945, event: 'Rolex révolutionne le monde de l\'horlogerie en lançant la Rolex Datejust. C\'est la première montre-bracelet chronomètre à remontage automatique qui affiche la date dans un guichet sur le cadran.' },
    { year: 1953, event: 'Rolex présente la Submariner en 1953, la toute première montre de plongée professionnelle. Conçue spécifiquement pour les plongeurs, elle est étanche jusqu\'à 100 mètres (330 pieds)' },
    { year: 1963, event: 'Rolex lance le Cosmograph Daytona, conçu pour répondre aux exigences des pilotes de course professionnels. Ce chronographe est doté d\'une échelle tachymétrique sur la lunette, permettant de mesurer la vitesse moyenne jusqu\'à 400 kilomètres ou miles par heure.' },
    { year: 1967, event: 'Rolex repousse les limites de l\'horlogerie de plongée avec le lancement de la Sea-Dweller. Conçue pour les plongeurs professionnels travaillant à des profondeurs extrêmes, la Sea-Dweller est étanche jusqu\'à 610 mètres (2000 pieds)' },
    { year: 2015, event: 'Rolex redéfinit les standards de l\'excellence en introduisant la certification Chronomètre Superlatif pour toutes ses montres. ' },

 ];

  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    document.documentElement.style.setProperty('--scroll', `${scrollPosition}`);
  }
}
