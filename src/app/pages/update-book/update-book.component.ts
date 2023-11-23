import { Component } from '@angular/core';
import { Book } from 'src/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  libro: Book = new Book('', '', '', '', '', '', ''); // Objeto que contendrá los datos del libro

  constructor(private booksService: BooksService){

  }

  actualizarLibro() {
    // Obtén el libro actual para preservar los datos no modificados
    const libroActual = this.booksService.getOne(this.libro.id_book);

    if (libroActual) {
      // Actualiza solo las propiedades modificadas
      const libroActualizado = new Book(
        this.libro.id_book,
        this.libro.id_user || libroActual.id_user,
        this.libro.title || libroActual.title,
        this.libro.type || libroActual.type,
        this.libro.author || libroActual.author,
        this.libro.price || libroActual.price,
        this.libro.photo || libroActual.photo
      );

      const actualizacionExitosa = this.booksService.edit(libroActualizado);

      if (actualizacionExitosa) {
        alert("¡Libro actualizado!");
      } else {
        alert("No se pudo actualizar el libro. Verifica el ID del libro.");
      }
    } else {
      alert("Libro no encontrado. Verifica el ID del libro.");
    }
  }
}
