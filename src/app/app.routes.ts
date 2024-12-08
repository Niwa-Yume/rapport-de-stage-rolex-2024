import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { MissionComponent } from './mission/mission.component';
import { SlideLayoutComponent } from './slide-layout.component';
import { HomeSlideComponent } from './home-slide.component';
import { AboutRolexComponent } from './about-rolex/about-rolex.component';

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
      }
    ]
  }
];
