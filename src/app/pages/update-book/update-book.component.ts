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

  // editarLibro(libro: Book): void {
  //   const exito = this.booksService.editLocal(libro);
  //   if(exito){
  //     this.procesarOperacion();
  //     alert('La edición ha sido satisfactoria illo')
  //   }else{
  //     console.error('illo hay algo que no has puesto bien date un voltio y vuelvelo a intentar');
  //   }
  // }

  editarLibroLocal(libro: Book): void {
    const exito = this.booksService.editLocal(libro);
    if(exito){
      this.procesarOperacion();
      alert('Éxito!')
    }else{
      console.error('Error!');
    }
  }
  editarLibroRemoto(libro: Book): void {
    this.booksService.edit(libro).subscribe(
      (data: Book) => {
        this.procesarOperacion();
        console.log('Datos recibido: ', data);
        alert('Èxito en la modificación!')
      },
      (error: any) => {
        console.error('Error al obtener datos: ', error);
        alert('Error en la modificación!')
      }
    )
  }

  private procesarOperacion(){
    this.actualizarListaLibros();
  }

  private actualizarListaLibros(){
    this.librosPorDefecto = this.booksService.getAllLocal();
  }
}