import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Book } from 'src/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  librosPorDefecto: Book[] = [];
  id_book: number;
  libroEscogido: Book | undefined;

  constructor(private booksService: BooksService) {

  }

  ngOnInit() {
    this.librosPorDefecto = this.booksService.getAllLocal();
  }

  // buscarLibro(): void {
  //   this.libroEscogido = this.booksService.getOneLocal(this.id_book);
  // }
  buscarLibroLocal(): void {
    this.libroEscogido = this.booksService.getOneLocal(this.id_book);
  }
  buscarLibroRemoto(): void {
    this.booksService.getOne(this.id_book).subscribe(
      (data: Book) => {
        this.libroEscogido = data;
        console.log('Libro buscado: ', data);
      },
      (error: Book) => {
        console.error(error);
      }
    );
  }


//   eliminarLibro(index: number): void {
//     let deleteBook = this.librosPorDefecto[index].id_book;
//     this.booksService.deleteLocal(deleteBook);
// }
  eliminarLibroLocal(index: number): void {
      let deleteBook = this.librosPorDefecto[index].id_book;
      this.booksService.deleteLocal(deleteBook);
  }
  eliminarLibroRemoto(index: number): void {
    let deleteBook = this.librosPorDefecto[index].id_book;
    this.booksService.delete(deleteBook).subscribe(
      (data: Book) => {
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  resetBuscarLibro(): void {
    this.libroEscogido = undefined;
  }

  alert(){
    setTimeout(() => {
      alert('Has eliminado el libro')
    }, 100);
  }
}