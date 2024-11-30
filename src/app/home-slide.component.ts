import { Component } from '@angular/core';

@Component({
  selector: 'app-home-slide',
  standalone: true,
  template: `
    <div class="section hero-section">
      <h1 class="title">Stage en développement web chez Rolex</h1>
      <p class="subtitle">Allier innovation digitale et expérience horlogère</p>
      
      <div class="subtitle">
        La perfection n'est pas atteinte quand il n'y a plus rien à ajouter,
        mais quand il n'y a plus rien à retirer.
      </div>
    </div>
  `
})
export class HomeSlideComponent {}