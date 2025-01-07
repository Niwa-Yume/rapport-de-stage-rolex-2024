import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toc',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.css']
})
export class TocComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  closeToc(): void {
    // Logic to close/hide Table of Contents if necessary
    const tocCheckbox: HTMLElement | null = document.getElementById('toc-checkbox');
    if (tocCheckbox) {
      (tocCheckbox as HTMLInputElement).checked = false;
    }
  }
}
