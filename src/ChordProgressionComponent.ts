import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChordKeyboardComponent } from './chord-keyboard.component';

@Component({
  standalone: true,
  imports: [CommonModule, ChordKeyboardComponent],
  selector: 'app-chord-progression',
  templateUrl: './chord-progression.component.html',
  styleUrls: ['./chord-progression.component.scss'],
})
export class ChordProgressionComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  measures: string[][] = [];
  activeMeasureIndex: number = 0;

  onChordClicked(chord: string) {
    console.log('Chord received:', chord);
    this.addChordToMeasure(chord);
  }

  addChordToMeasure(chord: string) {
    // Créez une nouvelle mesure si nécessaire
    if (
      this.measures.length === 0 ||
      this.activeMeasureIndex >= this.measures.length
    ) {
      this.measures.push([]);
      this.activeMeasureIndex = this.measures.length - 1;
    }

    // Ajoutez l'accord à la mesure active
    this.measures[this.activeMeasureIndex].push(chord);

    // Passez à la mesure suivante (si nécessaire)
    if (this.measures[this.activeMeasureIndex].length >= 4) {
      // Remplacez 4 par le nombre d'accords maximum par mesure
      this.activeMeasureIndex++;
    }
  }
}
