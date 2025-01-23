import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-ps',
  imports: [
    NgIf
  ],
  templateUrl: './ps.component.html',
  styleUrl: './ps.component.css'
})
export class PSComponent {
  isModalVisible = false;
  isSecondModalVisible = false;
  isToggleChecked = false;

  @ViewChild('toggleInput') toggleInput!: ElementRef<HTMLInputElement>;

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    if (this.isSecondModalVisible) {
      this.closeSecondModalAndResetToggle();
    }
    else if (this.isModalVisible) {
      this.closeModal();
    }
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  toggleModal() {
    this.isToggleChecked = !this.isToggleChecked; // Toggle l'état du marqueur
    this.isSecondModalVisible = this.isToggleChecked; // Utilise le marqueur pour définir la visibilité
  }

  closeSecondModal() {
    this.isSecondModalVisible = false;
    this.isToggleChecked = false; // Assurez-vous de réinitialiser le marqueur lorsque la modale se ferme
  }

  resetToggleSwitch() {
    // Vérifie si toggleInput a été correctement récupéré avant de l'utiliser.
    if (this.toggleInput && this.toggleInput.nativeElement) {
      this.toggleInput.nativeElement.checked = false;
    }
  }

  closeSecondModalAndResetToggle(event?: Event) {
    this.closeSecondModal();
    this.resetToggleSwitch();
  }
}
