import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/models/book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent {
  id_book: string = "";
  titulo: string = "";
  genero: string = "";
  autor: string = "";
  precio: string = "";
  foto: string = "";
  id_user: string = "";
  constructor(private booksService: BooksService) {}
  modificarLibro() {
    const nuevoLibro = new Book(this.id_book, this.id_user, this.titulo, this.genero, this.autor, this.precio, this.foto);
    this.booksService.add(nuevoLibro);
    alert("¡Libro modificado!");
  }
}