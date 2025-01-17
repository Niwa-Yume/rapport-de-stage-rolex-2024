import { Component } from '@angular/core';
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

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
