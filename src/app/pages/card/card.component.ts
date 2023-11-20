import { Component } from '@angular/core';
import { CanalCardBookService } from 'src/app/shared/canal-card-book.service';
import { Book } from 'src/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  showAllBooks: boolean = true;
  id_book: string = "";
  librosPorDefecto: Book[] = [];
  constructor(public cardBookService: CanalCardBookService, private booksService: BooksService) {
    this.librosPorDefecto = [];
    this.loadBooks();
  }
  private loadBooks() {
    let storedBooks = localStorage.getItem('librosPorDefecto');
    this.librosPorDefecto = storedBooks ? JSON.parse(storedBooks) : [];
  }
  buscarLibro() {
    if (this.id_book) {
      const foundBook = this.booksService.getOne(this.id_book);
      if (foundBook) {
        this.librosPorDefecto = [foundBook];
      } else {
        alert('Libro no encontrado');
      }
    } else {
      this.loadBooks();
    }
  }
  ngOnInit(){
    const storedBooks = localStorage.getItem('librosPorDefecto');
    if(storedBooks) {
      this.librosPorDefecto = JSON.parse(storedBooks);
    }
  }
  eliminarLibro(index: number){
    this.librosPorDefecto.splice(index, 1);
    localStorage.setItem('librosPorDefecto', JSON.stringify(this.librosPorDefecto));
  }
}