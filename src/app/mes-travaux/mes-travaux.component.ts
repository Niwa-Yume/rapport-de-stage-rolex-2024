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
    { src: 'image (5).png', alt: 'Travail 5' },
    { src: 'image (6).png', alt: 'Travail 6' },
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
