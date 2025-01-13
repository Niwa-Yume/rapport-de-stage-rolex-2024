import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';


@Component({
  selector: 'tech-stack',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css']
})
export class TechStackComponent {
  techStack = {
    'RxJs': 'https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'TypeScript': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
    'Primeng': 'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2018/05/primeng-logo.png?ssl=1',
    'Oracle': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    'Jetbrains': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Gitlab': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
    'SpringBoot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    'Teams':'https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png',
    'Bootstrap': 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg'
  };
}
