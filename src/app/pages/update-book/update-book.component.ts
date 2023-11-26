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
      },
      (error: any) => {
        console.error('Error al obtener datos: ', error);
      }
    );
  }

  private procesarOperacion(){
    this.actualizarListaLibrosLocal();
    this.actualizarListaLibrosRemoto();
  }

  // private actualizarListaLibrosLocal(){
  //   this.librosPorDefecto = this.booksService.getAllLocal()
  // }
  private actualizarListaLibrosLocal(){
    this.librosPorDefecto = this.booksService.getAllLocal();
  }
  private actualizarListaLibrosRemoto(){
    this.booksService.getAll().subscribe(
      (data: Book[]) => {
        this.librosPorDefecto = data;
        console.log('Datos actualizados: ', data);
        alert('Lista de libros actualizada!');
      },
      (error: any) => {
        console.error(error);
        alert('Error al actualizar la lista de libros!');
      }
    );
  }
}