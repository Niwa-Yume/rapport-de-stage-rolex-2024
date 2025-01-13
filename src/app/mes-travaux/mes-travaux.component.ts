import { Component } from '@angular/core';
import { NgForOf, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-mes-travaux',
  standalone: true,
  imports: [NgIf, NgForOf, NgClass],
  templateUrl: './mes-travaux.component.html',
  styleUrls: ['./mes-travaux.component.css'],
})
export class MesTravauxComponent {
  images = [
    { src: 'image (1).png', alt: 'Travail 1' },
    { src: 'image (2).png', alt: 'Travail 2' },
    { src: 'image (3).png', alt: 'Travail 3' },
    { src: 'image (4).png', alt: 'Travail 4' },
    { src: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1727879999/rolexcom/collection/family-pages/professional-watches/cosmograph-daytona/landing/cosmograph-daytona-landing-professional-watches-cosmograph-daytona-everose-gold_m126515ln-0006_2405jva_0003', alt: 'Travail 5' },
    { src: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1711631705/rolexcom/collection/family-pages/professional-watches/cosmograph-daytona/landing/professional-watches-cosmograph-daytona-a-legendary-design', alt: 'Travail 6' },
    { src: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1708388531/rolexcom/about-rolex/rolex-history/1905-1919/rolex-history-1905-1919-hans-wilsdorf', alt: 'Travail 7' }
  ];

  isModalOpen = false;
  modalImageSrc: string | undefined;
  modalImageAlt: string | undefined;

  openModal(image: { src: string; alt: string }) {
    this.modalImageSrc = image.src;
    this.modalImageAlt = image.alt;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
