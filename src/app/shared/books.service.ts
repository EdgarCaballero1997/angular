import { Injectable } from '@angular/core';
import { Book } from 'src/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private librosPorDefecto: Book[] = [];

  constructor(){
    
  }

  getAll(): Book[]{
    return this.librosPorDefecto; 
  }

  getOne(id_book: number): Book | undefined{
    return this.librosPorDefecto.find(libro => libro.id_book === id_book);
  }

  add(book: Book): void {
    this.librosPorDefecto.push(book);
  }

  edit(book: Book): Boolean | any {
    let index = this.librosPorDefecto.findIndex(libro => libro.id_book === book.id_book);
    if(index !== -1){
      this.librosPorDefecto[index] = book;
      return true;
    }else{
      return false;
    }
  }

  delete(id_book: number): boolean {
    let index = this.librosPorDefecto.findIndex(libro => libro.id_book === id_book);
    if(index !== -1){
      this.librosPorDefecto.splice(index, 1);
      return true;
    }else{
      return false;
    }
  }
}