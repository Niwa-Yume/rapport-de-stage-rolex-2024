import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-slide',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hero-container">

      <div class="content-container">
        <h1 class="title">Stage en développement web chez Rolex</h1>
        <p class="subtitle">Allier innovation digitale et expérience horlogère</p>
        
        <div class="quote-container">
          <div class="quote">
            <img src="rolex batiment.jpg" alt="batiment" class="responsive-image">
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .hero-container {
      position: relative;
      height: 90vh;
      width: 100%;
      overflow: hidden;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .image-wrapper {
  position: relative;
  width: 100%;
  height: auto; /* Permet à l'image de s'ajuster */
  z-index: 1; /* S'assure que l'image est en dessous du contenu */
}

    .hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transform: scale(1.1);
      transition: transform 8s ease;
      will-change: transform;
    }

    .hero-container:hover .hero-image {
      transform: scale(1.2);
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
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
    }

    .title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      letter-spacing: -0.02em;
      line-height: 1.2;
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
      border-left: 4px solid #d4af37;
      background: rgba(0,0,0,0.3);
      backdrop-filter: blur(8px);
    }

    .quote {
      font-size: 1.25rem;
      font-style: italic;
      line-height: 1.6;
      position: relative;
    }

    .quote-mark {
      color: #d4af37;
      font-size: 2rem;
      font-family: serif;
    }

    .responsive-image {
      width: 100%;
      height: auto;
      display: block;
    }

    .button-container {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
      display: flex;
      gap: 1rem;
    }

    .btn {
      background-color: #d4af37;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    .btn:hover {
      background-color: #b89a2a;
    }

    @media (max-width: 768px) {
      .title {
        font-size: 2.5rem;
      }
      
      .subtitle {
        font-size: 1.25rem;
      }
      
      .quote {
        font-size: 1.1rem;
      }

      .hero-image {
        object-position: center;
        transform: scale(1.05);
      }
    }
  `]
})
export class HomeSlideComponent {
  handleImageError(event: any) {
    event.target.src = 'fallback-image.jpg';
  }
}