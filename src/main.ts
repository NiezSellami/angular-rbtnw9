import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChordProgressionComponent } from './ChordProgressionComponent';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ChordProgressionComponent],
  template: `
    <app-chord-progression></app-chord-progression>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
