import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css'],
  animations: [
    trigger('fadeInUp', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition('void => *', [
        animate('600ms ease-out')
      ])
    ]),
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', [
        animate('800ms 300ms ease-out')
      ])
    ]),
    trigger('scaleIn', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.8)'
      })),
      transition('void => *', [
        animate('800ms 500ms cubic-bezier(0.23, 1, 0.32, 1)')
      ])
    ])
  ]
})
export class MissionComponent implements OnInit {
  isVisible = false;

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

}
