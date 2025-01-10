import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent {
  showDialog = false;
  showSecondDialog = false; // Property for the second modal

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  openSecondDialog() {
    this.showSecondDialog = true;
  }

  closeSecondDialog() {
    this.showSecondDialog = false;
  }

  closeBothDialogs() {
    this.showDialog = false;
    this.showSecondDialog = false;
  }
  toggleAccordion(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('hidden');
    }
  }
}
