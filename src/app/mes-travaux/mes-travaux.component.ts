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
    { src: 'image (1).png', alt: 'Travail 1', context: '...', srcOld: 'old-image (1).png' },
    { src: 'image (2).png', alt: 'Travail 2', context: '...', srcOld: 'old-version-dashboard.png' },
    { src: 'image (3).png', alt: 'Travail 3', context: '...', srcOld: 'old-image (3).png' },
    { src: 'image (4).png', alt: 'Travail 4', context: '...', srcOld: 'old-image (4).png' },
    { src: 'image (5).png', alt: 'Travail 5', context: '...', srcOld: 'old-image (5).png' },
    { src: 'image (6).png', alt: 'Travail 6', context: '...', srcOld: 'image (6)-old.png' },
    { src: 'image (7).png', alt: 'Travail 7', context: '...', srcOld: 'old-image (7).png' }
  ];

  isModalOpen = false;
  currentImageSrc: string | undefined;
  modalImageAlt: string | undefined;
  modalImageContext: string | undefined;
  isOldVersion = false;

  openModal(image: { src: string; alt: string; context: string; srcOld: string }) {
    this.currentImageSrc = image.src;
    this.modalImageAlt = image.alt;
    this.modalImageContext = image.context;
    this.isOldVersion = false;
    this.isModalOpen = true;
  }

  toggleImage() {
    const currentImage = this.images.find(img => img.src === this.currentImageSrc || img.srcOld === this.currentImageSrc);
    if (currentImage) {
      this.isOldVersion = !this.isOldVersion;
      this.currentImageSrc = this.isOldVersion ? currentImage.srcOld : currentImage.src;
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
