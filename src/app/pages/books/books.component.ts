import { Component } from '@angular/core';
import { Book } from 'src/models/book';
import { CanalCardBookService } from 'src/app/shared/canal-card-book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  id_book: string = "";
  number_idBook: number = +this.id_book;
  id_user: string = "";
  number_idUser: number = +this.id_user;
  titulo: string = "";
  genero: string = "";
  autor: string = "";
  precio: string = "";
  numberPrecio: number = +this.precio;
  foto: string = "";
  librosPorDefecto: Book[] = [];
  constructor(public cardBookService: CanalCardBookService) {
  }
  infoInputs() {
    const nuevoLibro = new Book(this.id_book, this.id_user, this.titulo, this.genero, this.autor, this.precio, this.foto);
    const librosEnLocalStorage = localStorage.getItem('librosPorDefecto');
    this.librosPorDefecto = librosEnLocalStorage ? JSON.parse(librosEnLocalStorage): [];
    this.librosPorDefecto.push(nuevoLibro);
    localStorage.setItem('librosPorDefecto', JSON.stringify(this.librosPorDefecto));
    alert("¡Libro añadido!");
  }
  alert(){
    alert("Copia y pega una de estas rutas:\n../../../assets/img/pasionIndia.jpg\n../../../assets/img/juanramonrallo.jpeg\n../../../assets/img/kenfollet.jpg\n");
  }
  borrarLocalStorage() {
    localStorage.removeItem('librosPorDefecto');
  }
}