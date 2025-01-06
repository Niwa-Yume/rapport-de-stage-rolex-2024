import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';


@Component({
  selector: 'app-mes-travaux',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './mes-travaux.component.html',
  styleUrl: './mes-travaux.component.css'
})
export class MesTravauxComponent {
  images = [
    {src: 'image (1).png', alt: 'Travail 1'},
    {src: 'image (2).png', alt: 'Travail 2'},
    {src: 'image (3).png', alt: 'Travail 3'},
    {src: 'image (4).png', alt: 'Travail 4'}
  ];

  isModalOpen = false;
  modalImageSrc: string | undefined;
  modalImageAlt: string | undefined;

  openModal(image: { src: string, alt: string }) {
    this.modalImageSrc = image.src;
    this.modalImageAlt = image.alt;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
