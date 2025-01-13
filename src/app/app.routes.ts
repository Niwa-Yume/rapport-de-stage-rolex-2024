import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { MissionComponent } from './mission/mission.component';
import { SlideLayoutComponent } from './slide-layout.component';
import { HomeSlideComponent } from './home-slide.component';
import { AboutRolexComponent } from './about-rolex/about-rolex.component';
import { ExpectationsComponent } from './expectations/expectations.component';
import { MesTravauxComponent } from './mes-travaux/mes-travaux.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import {TocComponent} from './toc/toc.component';
import {ImpactComponent} from './impact/impact.component';

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
        path: 'app-expectations',
        component: ExpectationsComponent
      },
      {
        path: 'app-mes-travaux',
        component: MesTravauxComponent
      },
      {
        path: 'app-conclusion',
        component: ConclusionComponent
      },{
        path: 'app-toc',
        component: TocComponent
      },{
        path: 'app-impact',
        component: ImpactComponent
      },
    ]
  }
];
