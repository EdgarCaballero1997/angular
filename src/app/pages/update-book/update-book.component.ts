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
}
