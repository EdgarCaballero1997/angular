import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { CommunicationService } from 'src/app/shared/communication.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  id_book: string = '';
  numBook: number = +this.id_book;
  id_user: string = "";
  numPrecio: number = +this.id_book;;
  titulo: string = "";
  genero: string = "";
  autor: string = "";
  precio: string = "";
  numUser: number = +this.precio;
  foto: string = "";
  librosPorDefecto: Book[] = [];
  coincidenciaEncontrada: boolean = false;
  isAddButtonDisabled: boolean = true;

  constructor(private booksService: BooksService, private communicationService: CommunicationService) {

  }

  onFiltroIdChange(filtroId: string) {
    console.log('Filtro ID Cambiado:', filtroId);
    if (filtroId) {
      this.librosPorDefecto = this.booksService.searchBooks(filtroId);
    } else {
      this.booksService.getAll().subscribe((books: Book[]) => {
        this.librosPorDefecto = books;
      });
    }
  }

  ngOnInit() {
    this.booksService.getAll().subscribe(
      (books: Book[]) => {
        this.librosPorDefecto = books;
      },
      (error) => {
        console.error('Error al obtener libros:', error);
      }
    );

    this.communicationService.filtroId$.subscribe(
      (filtroId: string) => {
        if (filtroId) {
          const resultados = this.booksService.searchBooks(filtroId);
          this.coincidenciaEncontrada = resultados.length > 0;
          this.librosPorDefecto = resultados;
        } else {
          this.booksService.getAll().subscribe(
            (books: Book[]) => {
              this.coincidenciaEncontrada = false;
              this.librosPorDefecto = books;
            },
            (error) => {
              console.error('Error al obtener libros después de limpiar el filtro:', error);
            }
          );
        }
      },
      (error) => {
        console.error('Error en la suscripción al filtroId$:', error);
      }
    );
  }

  infoInputs() {
    const nuevoLibro = new Book(this.id_book, this.id_user, this.titulo, this.genero, this.autor, this.precio, this.foto);
    this.booksService.add(nuevoLibro);
    alert("¡Libro añadido!");
  }

  alert(){
    alert("Copia y pega una de estas rutas:\n../../../assets/img/pasionIndia.jpg\n../../../assets/img/juanramonrallo.jpeg\n../../../assets/img/kenfollet.jpg\n");
  }

  onLibroEliminado(index: number) {
    this.booksService.deleteBook(index);
  }
}