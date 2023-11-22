import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from 'src/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private librosPorDefecto: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  constructor(){
    this.librosPorDefecto.next([
      new Book('00001', '001', 'Señor de los Anillos', 'Aventura', 'J. R. R. Tolkien', '23.40', '../assets/img/portada-elSeñor.webp'),
      new Book('00002', '002', 'Harry Potter', 'Aventura', 'J. K. Rowling', '14.90', '../assets/img/portada-harryPotter.jpg'),
    ]);
  }

  getAll(): BehaviorSubject<Book[]> {
    return this.librosPorDefecto;
  }

  getOne(id_book: string): Book | undefined {
    return this.librosPorDefecto.value.find(book => book.id_book === id_book);
  }

  add(book: Book): void {
    const currentBooks = this.librosPorDefecto.value;
    this.librosPorDefecto.next([...currentBooks, book]);
  }

  edit(book: Book): boolean {
    const currentBooks = this.librosPorDefecto.value;
    const index = currentBooks.findIndex(b => b.id_book === book.id_book);

    if (index !== -1) {
      currentBooks[index] = book;
      this.librosPorDefecto.next([...currentBooks]);
      return true;
    }

    return false;
  }

  delete(id_book: string): boolean {
    const currentBooks = this.librosPorDefecto.value;
    const index = currentBooks.findIndex(book => book.id_book === id_book);

    if (index !== -1) {
      currentBooks.splice(index, 1);
      this.librosPorDefecto.next([...currentBooks]);
      return true;
    }

    return false;
  }

  searchBooks(id_book: string): Book[] {
    if (!id_book) {
      return this.librosPorDefecto.value;
    }
    const foundBook = this.getOne(id_book);
    return foundBook ? [foundBook] : [];
  }

  deleteBook(index: number): void {
    const currentBooks = this.librosPorDefecto.value;
    currentBooks.splice(index, 1);
    this.librosPorDefecto.next([...currentBooks]);
  }
}