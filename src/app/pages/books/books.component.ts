import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  id_book: string = "";
  numero1: number = +this.id_book;    //Transformo los números string en tipo number. Hago esto porque de lo contrario he de inicializar
  id_user: string = "";               //el valor de los parámetros tipo number en 0, y por lo tanto en los formularios aparece el número 0
  numero2: number = +this.id_user;    //impidiendo que se visualice el placeholder.
  titulo: string = "";
  genero: string = "";
  autor: string = "";
  precio: string = "";
  numero3: number = +this.precio;
  foto: string = "";
  libros: Book[] = [];
  constructor() {
    this.libros = [
      new Book("00001", "01", "Harry Potter", "Fantasía", "J. K. Rowling", "14.90", "../../../assets/img/ede09e2aaf5130972273563930926ce3.jpg.webp"),
      new Book("00002", "02", "El Señor de los Anillos", "Aventura", "J. R. R. Tolkien", "20", "../../../assets/img/portada_el-senor-de-los-anillos-n-0303-el-retorno-del-rey-ne_j-r-r-tolkien_202210071217.webp"),
      new Book("00003", "03", "Los Juegos del Hambre", "Acción", "Suzane Collins", "9.99", "../../../assets/img/Juegos.png"),
      new Book("00004", "04", "Pinocho", "Fantasía", "Carlo Collodi", "4.99", "../../../assets/img/pinocho.jpg"),
      new Book("00005", "05", "Assassin's Creed", "Aventura", "Ubisoft Productions", "12.50", "../../../assets/img/acu.avif"),
      new Book("00006", "06", "Bilbia", "Religión", "Desconocido", "5.99", "../../../assets/img/biblia.jpg")
    ];
  }
  ngOnInit(){     //Este método está hecho con ChatGPT. Para poder mantener las card después de actualizar he necesitado aplicar este código. Obviamente mis conocimientos no llegaban a ese nivel.
    const storedBooks = localStorage.getItem('libros');
    if(storedBooks) {
      this.libros = JSON.parse(storedBooks);
    }
  }
  captarInfo(){
    let libro = new Book(this.id_book, this.id_user, this.titulo, this.genero, this.autor, this.precio, this.foto);
    this.libros.push(libro);
    localStorage.setItem('libros', JSON.stringify(this.libros));
    alert("¡Libro añadido!");
  }
  alert(){
    alert("Copia y pega una de estas rutas:\n../../../assets/img/pasionIndia.jpg\n../../../assets/img/juanramonrallo.jpeg\n../../../assets/img/kenfollet.jpg\n");
  }
  eliminarLibro(indice: number) {
    this.libros.splice(indice, 1);
    localStorage.setItem('libros', JSON.stringify(this.libros));
  }
  borrarLocalStorage() {
    localStorage.removeItem('libros');
  }
}