import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Book } from 'src/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private librosPorDefecto: Book[] = [];
  // private apiUrl = 'http://localhost:3000'

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

  // edit(book: Book): boolean {
  //   let currentBooks = this.librosPorDefecto.value;
  //   let index = currentBooks.findIndex(b => b.id_book === book.id_book);
  
  //   if (index !== -1) {
  //     currentBooks[index] = book;
  //     this.librosPorDefecto.next([...currentBooks]);
  //     return true;
  //   }
  
  //   return false;
  // }

  // delete(id_book: string): boolean {
  //   const currentBooks = this.librosPorDefecto.value;
  //   const index = currentBooks.findIndex(book => book.id_book === id_book);

  //   if (index !== -1) {
  //     currentBooks.splice(index, 1);
  //     this.librosPorDefecto.next([...currentBooks]);
  //     return true;
  //   }

  //   return false;
  // }

  // searchBooks(id_book: string): Book[] {
  //   if (!id_book) {
  //     return this.librosPorDefecto.value;
  //   }
  //   const foundBook = this.getOne(id_book);
  //   return foundBook ? [foundBook] : [];
  // }

  // deleteBook(index: number): void {
  //   const currentBooks = this.librosPorDefecto.value;
  //   currentBooks.splice(index, 1);
  //   this.librosPorDefecto.next([...currentBooks]);
  // }
}