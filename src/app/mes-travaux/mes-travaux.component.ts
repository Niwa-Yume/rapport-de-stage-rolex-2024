import {Component, HostListener} from '@angular/core';
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
    {
      src: 'image (1).png',
      alt: 'Travail 1',
      context: 'Cet écran illustre une règle qui, en cas de création d\'un nouveau délai, informe toutes les personnes possédant un rôle spécifique du nouveau délai. Ces personnes ont alors 2 options : accepter le délai, ou attendre d\'avoir plusieurs délais avant de prendre une décision.',
      srcOld: 'old-popup.png'
    },
    {
      src: 'image (2).png',
      alt: 'Travail 2',
      context: 'Ce tableau affiche tous les délais en attente de traitement, acceptés à partir de la pop-up précédente. Il permet de gérer et de traiter ces délais, tout en affichant toutes les informations pertinentes. Une fois qu\'un délai a été traité, selon les indications de la pop-up que je vous montrerai après, vous cliquez sur le bouton "traitée". Si le délai n\'est pas direct, il est directement validé ; sinon, il est déplacé vers le tableau "à contrôler" situé en dessous, où il doit être validé par un autre gestionnaire ayant un rôle dédié.',
      srcOld: 'old-version-dashboard.png'
    },
    {
      src: 'image (3).png',
      alt: 'Travail 3',
      context: 'Ce pop-up/modal permet de modifier ou traiter le délai. Il affiche les différentes informations relatives au délai, y compris des règles spécifiques applicables selon le choix du pays ou du groupe. On peut également vérifier si le délai est direct ou non. Le gestionnaire peut ajouter des commentaires pour traiter le délai ou fournir des informations complémentaires. Si le délai est direct, il ne passe pas par le contrôle et est validé directement.',
      srcOld: 'dialogue-dashboard.png'
    },
    {
      src: 'image (4).png',
      alt: 'Travail 4',
      context: 'Ce tableau des devises sert à comparer les taux de change par rapport au franc suisse (CHF). Il permet d\'afficher des taux personnalisés en fonction des besoins de l\'entreprise. En outre, vous pouvez voir les taux définis par la comptabilité, qui sont indépendants des taux du marché actuel ou traditionnel.',
      srcOld: 'old-devise.png'
    },
    {
      src: 'image (5).png',
      alt: 'Travail 5',
      context: 'Ce tableau permet de gérer les versions des écrans en AngularJS et en Angular moderne. On peut afficher les versions nouvelles (new), anciennes (old), ou les deux, en fonction des besoins des utilisateurs. L\'idée est de faire une transition progressive de tous les écrans vers les nouvelles versions, tout en conservant les anciennes versions en cas de problème avec le code ou les nouveaux écrans, afin de pouvoir revenir aux anciennes versions si nécessaire.',
      srcOld: 'image (5).png' // On remet la même car il existe pas de old hidden page
    },
    {
      src: 'image (6).png',
      alt: 'Travail 6',
      context: 'Ce modal sert à comparé le modal old et new et les codes pour la nouvelles entre le header et le footer pour les boutons',
      srcOld: 'old.png'
    },
    {
      src: 'image (7).png',
      alt: 'Travail 7',
      context: 'Cette page permet de gérer les rôles des utilisateurs. Pour chaque profil d\'utilisateur, elle affiche une liste des rôles disponibles, que l\'utilisateur peut ajouter ou enlever.',
      srcOld: 'rol-old.png'
    }
  ];

  isModalOpen = false;
  currentImageSrc: string | undefined;
  modalImageAlt: string | undefined;
  modalImageContext: string | undefined;
  isOldVersion = false;

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    if (this.isModalOpen) {
      this.closeModal();
    }
  }


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
