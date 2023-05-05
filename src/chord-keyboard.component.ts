import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-chord-keyboard',
  templateUrl: './chord-keyboard.component.html',
  styleUrls: ['./chord-keyboard.component.scss'],
})
export class ChordKeyboardComponent {
  @Output() chordClicked = new EventEmitter<string>();

  chordRows: string[][] = [
    ['Cmaj7', 'Dm7', 'Em7', 'Fmaj7', 'G7', 'Am7', 'Bm7b5'],
    // Ajoutez d'autres lignes si nécessaire
  ];

  onChordClick(chord: string) {
    console.log('Chord clicked:', chord);
    this.chordClicked.emit(chord);
  }
}
