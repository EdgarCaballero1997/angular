import { Injectable } from '@angular/core';
import { Book } from 'src/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private librosPorDefecto: Book[] = [];

  constructor() {
    // Puedes inicializar algunos libros aquí o cargarlos desde localStorage
  }

  getAll(): Book[] {
    return this.librosPorDefecto;
  }

  getOne(id_book: string): Book | undefined {
    return this.librosPorDefecto.find(book => book.id_book === id_book);
  }

  add(book: Book): void {
    this.librosPorDefecto.push(book);
    // También puedes guardar en localStorage aquí si es necesario
  }

  // Otros métodos para editar y eliminar libros
}
