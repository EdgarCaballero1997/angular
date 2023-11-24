import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  id_book: number = 0;
  id_user: number = 0;
  titulo: string = "";
  genero: string = "";
  autor: string = "";
  precio: number = 0;
  foto: string = "";
  // librosPorDefecto: Book[] = [
  //   new Book('00001', '001', 'Señor de los Anillos', 'Aventura', 'J. R. R. Tolkien', '23.40', '../assets/img/portada-elSeñor.webp'),
  //   new Book('00002', '002', 'Harry Potter', 'Aventura', 'J. K. Rowling', '14.90', '../assets/img/portada-harryPotter.jpg'),
  // ];
  coincidenciaEncontrada: boolean = false;
  isAddButtonDisabled: boolean = true;

  constructor(private booksService: BooksService) {

  }
    // FUNCIONALIDAD QUE NO FUNCIONA. LA COMENTO PARA QUE NO ENTRE EN CONFLICTO CON OTROS MÉTODOS.
    // Esta funcionalidad se supone que mostraba una card cuando la buscabas en el buscador de la página 'Books'
    onFiltroIdChange(filtroId: string){
      // console.log('Filtro ID Cambiado:', filtroId);
      // if (filtroId) {
      //   this.booksService.searchBooks(filtroId).subscribe(
      //     (resultados: Book[]) => {
      //       this.librosPorDefecto = resultados;
      //     },
      //     error => console.error('Error al buscar libros por ID:', error)
      //   );
      // } else {
      //   this.booksService.getAll().subscribe(
      //     (books: Book[]) => {
      //       this.librosPorDefecto = books;
      //     },
      //     error => console.error('Error al obtener todos los libros:', error)
      //   );
      // }
    }
    

    ngOnInit(){
      // this.booksService.getAll().subscribe(
      //   (books: Book[]) => {
      //     this.librosPorDefecto = books;
      //   },
      //   (error) => {
      //     console.error('Error al obtener libros:', error);
      //   }
      // );
    
      // this.communicationService.filtroId$.subscribe(
      //   (filtroId: string) => {
      //     if (filtroId) {
      //       this.booksService.searchBooks(filtroId).subscribe(
      //         (resultados: Book[]) => {
      //           this.coincidenciaEncontrada = resultados.length > 0;
      //           this.librosPorDefecto = resultados;
      //         },
      //         (error) => console.error('Error al buscar libros por ID:', error)
      //       );
      //     } else {
      //       this.booksService.getAll().subscribe(
      //         (books: Book[]) => {
      //           this.coincidenciaEncontrada = false;
      //           this.librosPorDefecto = books;
      //         },
      //         (error) => {
      //           console.error('Error al obtener libros después de limpiar el filtro:', error);
      //         }
      //       );
      //     }
      //   },
      //   (error) => {
      //     console.error('Error en la suscripción al filtroId$:', error);
      //   }
      // );
    }
    

  infoInputs() {
    let nuevoLibro = new Book(this.id_book, this.id_user, this.titulo, this.genero, this.autor, this.precio, this.foto);
    this.booksService.add(nuevoLibro);
    alert("¡Libro añadido!");
  }

  alert(){
    alert("Copia y pega una de estas rutas:\n../../../assets/img/pasionIndia.jpg\n../../../assets/img/juanramonrallo.jpeg\n../../../assets/img/kenfollet.jpg\n../../../assets/img/portada-harryPotter.jpg\n../../../assets/img/portada-elSeñor.webp");
  }

  // onLibroEliminado(index: number) {
  //   this.booksService.deleteBook(index);
  // }
}