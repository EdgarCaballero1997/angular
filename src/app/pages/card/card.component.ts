import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Book } from 'src/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {  // Implementa OnInit

  @Input() librosPorDefecto: Book[] = [];
  @Output() libroEliminado = new EventEmitter<number>();

  id_book: string = "";
  // librosPorDefecto: Book[] = [];

  constructor(private booksService: BooksService) {
    this.librosPorDefecto = [];
  }

  ngOnInit() {
    this.loadBooks();
    this.booksService.getAll().subscribe((books: Book[]) => {
    this.librosPorDefecto = books;
  });
  }

  private loadBooks() {
    let storedBooks = localStorage.getItem('librosPorDefecto');
    this.librosPorDefecto = storedBooks ? JSON.parse(storedBooks) : [];
  }

  eliminarLibro(index: number): void {
    this.libroEliminado.emit(index);
  }
}