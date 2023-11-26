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

  coincidenciaEncontrada: boolean = false;
  isAddButtonDisabled: boolean = true;

  constructor(private booksService: BooksService) {

  }

  ngOnInit(){
    
  }

  // infoInputs() {
  //   let nuevoLibro = new Book(this.id_book, this.id_user, this.titulo, this.genero, this.autor, this.precio, this.foto);
  //   this.booksService.addLocal(nuevoLibro);
  //   alert("¡Libro añadido!");
  // }
  infoInputsLocal() {
    let nuevoLibro = new Book(this.id_book, this.id_user, this.titulo, this.genero, this.autor, this.precio, this.foto);
    this.booksService.addLocal(nuevoLibro);
    alert("¡Libro añadido!");
  }
  infoInputsRemoto() {
    let nuevoLibro = new Book(this.id_book, this.id_user, this.titulo, this.genero, this.autor, this.precio, this.foto);
    this.booksService.add(nuevoLibro).subscribe(
      (data: Book) => {
        console.log('Información del nuevo libro: ', data);
        
      },
      (error: Book) => {
        console.error(error);
      }
    );
  }

  alert(){
    alert("Copia y pega una de estas rutas:\n../../../assets/img/pasionIndia.jpg\n../../../assets/img/juanramonrallo.jpeg\n../../../assets/img/kenfollet.jpg\n../../../assets/img/portada-harryPotter.jpg\n../../../assets/img/portada-elSeñor.webp");
  }
}