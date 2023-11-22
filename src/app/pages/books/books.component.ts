import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book';
import { BooksService } from 'src/app/shared/books.service';

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
  constructor(private booksService: BooksService) {
  }
  ngOnInit(){
    this.booksService.getAll().subscribe((books: Book[]) => {
      this.librosPorDefecto = books;
    });
  }
  infoInputs() {
    const nuevoLibro = new Book(this.id_book, this.id_user, this.titulo, this.genero, this.autor, this.precio, this.foto);
    this.booksService.add(nuevoLibro);
    alert("¡Libro añadido!");
  }
  alert(){
    alert("Copia y pega una de estas rutas:\n../../../assets/img/pasionIndia.jpg\n../../../assets/img/juanramonrallo.jpeg\n../../../assets/img/kenfollet.jpg\n");
  }
  borrarLocalStorage() {
    localStorage.removeItem('librosPorDefecto');
  }
  onLibroEliminado(index: number) {
    this.booksService.deleteBook(index);
  }
}