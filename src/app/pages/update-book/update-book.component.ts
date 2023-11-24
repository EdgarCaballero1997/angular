import { Component } from '@angular/core';
import { Book } from 'src/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  libro: Book = new Book(0, 0, '', '', '', 0, '');
  librosPorDefecto: Book[] = [];

  constructor(private booksService: BooksService){

  }

  editarLibro(libro: Book): void {
    const exito = this.booksService.edit(libro);
    if(exito){
      this.procesarOperacion();
      alert('La edición ha sido satisfactoria illo')
    }else{
      console.error('illo hay algo que no has puesto bien sale un voltio y vuelvelo a intentar pisha');
    }
  }

  private procesarOperacion(){
    this.actualizarListaLibros();
  }

  private actualizarListaLibros(){
    this.librosPorDefecto = this.booksService.getAll();
  }

  // actualizarLibro() {
  //   // Obtén el libro actual para preservar los datos no modificados
  //   this.booksService.getOne(this.libro.id_book).subscribe(
  //     (libroActual: Book | undefined) => {
  //       if (libroActual) {
  //         // Actualiza solo las propiedades modificadas
  //         const libroActualizado = new Book(
  //           this.libro.id_book,
  //           this.libro.id_user || libroActual.id_user,
  //           this.libro.title || libroActual.title,
  //           this.libro.type || libroActual.type,
  //           this.libro.author || libroActual.author,
  //           this.libro.price || libroActual.price,
  //           this.libro.photo || libroActual.photo
  //         );

  //         this.booksService.edit(libroActualizado).subscribe(
  //           () => {
  //             alert("¡Libro actualizado!");
  //           },
  //           error => {
  //             console.error('Error al actualizar el libro:', error);
  //             alert("No se pudo actualizar el libro. Verifica el ID del libro.");
  //           }
  //         );
  //       } else {
  //         alert("Libro no encontrado. Verifica el ID del libro.");
  //       }
  //     },
  //     error => {
  //       console.error('Error al obtener el libro:', error);
  //       alert("No se pudo obtener el libro. Verifica el ID del libro.");
  //     }
  //   );
  // }
}
