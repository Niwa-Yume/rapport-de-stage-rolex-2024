import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { MissionComponent } from './mission/mission.component';
import { SlideLayoutComponent } from './slide-layout.component';
import { HomeSlideComponent } from './home-slide.component';
import { AboutRolexComponent } from './about-rolex/about-rolex.component';
import {AttentesComponent} from './attentes/attentes.component';
import {RetourExperienceComponent} from './retour-experience/retour-experience.component';
import {ConclusionComponent} from './conclusion/conclusion.component';

export const routes: Routes = [
  {
    path: '',
    component: SlideLayoutComponent,
    children: [
      {
        path: '',
        component: HomeSlideComponent
      },
      {
        path: 'app-mission',
        component: MissionComponent
      },
      {
        path: 'tech-stack',
        component: TechStackComponent
      },
      {
        path: 'about-rolex',
        component: AboutRolexComponent
      },
      {
        path: 'app-attentes',
        component: AttentesComponent
      },
      {
        path: 'app-retour-experience',
        component: RetourExperienceComponent
      },
      {
        path: 'app-conclusion',
        component: ConclusionComponent
      }
    ]
  }
];
