import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-slide',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hero-container">

      <div class="content-container">
        <h1 class="title">Rapport de stage en développement web</h1>
        <p class="subtitle"> Septembre 2024 - Janvier 2025<br> Julien Castro</p>

        <div class="quote-container">
          <div class="quote">
            <img src="https://logowik.com/content/uploads/images/275_rolex.jpg" alt="Logo Rolex" class="intro-image" style="width: 50vh" />
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .hero-container {
      position: relative;
      height: 100%;
      width: 100%;
      overflow: hidden;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }


    .content-container {
      position: relative;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 2rem;
      text-align: center;
      z-index: 2;
      margin-top: 20px;
    }



    .subtitle {
      font-size: 1.5rem;
      opacity: 0.9;
      max-width: 600px;
      margin-bottom: 3rem;
    }

    .quote-container {
      max-width: 800px;
      padding: 2rem;
      background: rgba(0,0,0,0.3);
      backdrop-filter: blur(8px);
    }

    .quote {
      font-size: 1.25rem;
      font-style: italic;
      line-height: 1.6;
      position: relative;
    }

    @media (max-width: 768px) {
      .title {
        font-size: 1.8rem;
      }

      .subtitle {
        font-size: 0.9rem;
      }

      .quote {
        font-size: 0.9rem;
      }

      .content-container {
        padding: 0 1rem;
        margin-top: 15px;
      }

      .hero-image {
        object-position: center;
        transform: scale(1.05);
        max-height: 40vh;
      }
    }

    @media (max-width: 480px) {
      .title {
        font-size: 1.5rem;
      }

      .subtitle {
        font-size: 0.8rem;
      }

      .quote {
        font-size: 0.9rem;
      }

      .hero-image {
        height: auto;
        transform: scale(1);
        max-height: 30vh;
      }

      .button-container {
        flex-direction: column;
      }

      .content-container {
        margin-top: 10px;
      }
    }
  `]
})
export class HomeSlideComponent {
  handleImageError(event: any) {
    event.target.src = 'fallback-image.jpg';
  }
}
