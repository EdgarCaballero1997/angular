import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() librosPadre: Book[];
  @Output() eliminarLibroEvent = new EventEmitter<number>();
  eliminarLibro(index: number){
    this.eliminarLibroEvent.emit(index);
  }
}