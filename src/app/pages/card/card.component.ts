import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Book } from 'src/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  librosPorDefecto: Book[] = [];
  id_book: number;
  libroEscogido: Book | undefined;

  constructor(private booksService: BooksService) {

  }

  ngOnInit() {
    this.librosPorDefecto = this.booksService.getAllLocal();
  }

  buscarLibro(): void {
    this.libroEscogido = this.booksService.getOneLocal(this.id_book);
  }

  eliminarLibro(index: number): void {
      let deleteBook = this.librosPorDefecto[index].id_book;
      this.booksService.deleteLocal(deleteBook);
  }

  resetBuscarLibro(): void {
    this.libroEscogido = undefined;
  }

  alert(){
    setTimeout(() => {
      alert('Has eliminado el libro')
    }, 100);
  }
}