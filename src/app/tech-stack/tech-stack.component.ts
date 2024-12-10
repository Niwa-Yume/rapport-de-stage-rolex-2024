import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';


@Component({
  selector: 'tech-stack',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css']
})
export class TechStackComponent implements OnInit{

  animate: boolean = false;

  ngOnInit() {
    // Déclenchez l'animation après 5 secondes
    setTimeout(() => {
      this.animate = true;
    }, 5000);
  }

  techStack = {
    'RxJs': {
      image: 'https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png',
      description: 'Une bibliothèque pour la programmation réactive utilisant des Observables.'
    },
    'CSS': {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      description: 'Un langage de feuille de style utilisé pour décrire la présentation d\'un document écrit en HTML.'
    },
    'TypeScript': {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png',
      description: 'Un langage de programmation fortement typé qui repose sur JavaScript.'
    },
    'Angular': {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      description: 'un framework pour construire des applications clientes'
    },
    'Primeng': {
      image: 'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2018/05/primeng-logo.png?ssl=1',
      description: 'Une collection de composants pour Angular.'
    },
    'Oracle': {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
      description: 'Un système de gestion de base de données multi-modèle'
    },
    'Jetbrains': {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg',
      description: 'Suite d\'IDE par la société JetBrains'
    },
    'Git': {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      description: 'Un système de contrôle de version distribué gratuit et open source'
    },
    'Gitlab': {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
      description: 'Un outil DevOps basé sur le versioning'
    },
    'SpringBoot': {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      description: 'Un framework open source, pour construire des applications sur Java.'
    },
    'Teams': {
      image: 'https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png',
      description: 'Une plateforme de collaboration'
    },
    'Bootstrap': {
      image: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg',
      description: 'Un framework CSS gratuit et open-source.'
    }
  };
}
