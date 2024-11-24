import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

export const routes: Routes = [
  {
    path: 'tech-stack',
    component: TechStackComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
