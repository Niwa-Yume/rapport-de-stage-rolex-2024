import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    TableModule
  ],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent {
  showDialog = false;

  openDialog() {
    this.showDialog = true;
  }
}
