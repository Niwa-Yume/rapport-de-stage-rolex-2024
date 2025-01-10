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
  showSecondDialog = false;

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

}
