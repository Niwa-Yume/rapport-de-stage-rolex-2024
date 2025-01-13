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
  techStack = [
    { name: 'Angular', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
    { name: 'SpringBoot', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'TypeScript', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png' },
    { name: 'CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Bootstrap', imageUrl: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg' },
    { name: 'Git', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'RxJs', imageUrl: 'https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png' },
    { name: 'Primeng', imageUrl: 'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2018/05/primeng-logo.png?ssl=1' },
    { name: 'Oracle', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    { name: 'Jetbrains', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg' },
    { name: 'Gitlab', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    { name: 'Teams', imageUrl: 'https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png' },
  ];
}
