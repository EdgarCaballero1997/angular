import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private librosPorDefecto: Book[] = [];
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient){
    
  }
    // METODOS LOCALES
  getAllLocal(): Book[]{
    return this.librosPorDefecto; 
  }

  getOneLocal(id_book: number): Book | undefined{
    return this.librosPorDefecto.find(libro => libro.id_book === id_book);
  }

  addLocal(book: Book): void {
    this.librosPorDefecto.push(book);
  }

  editLocal(book: Book): Boolean | any {
    let index = this.librosPorDefecto.findIndex(libro => libro.id_book === book.id_book);
    if(index !== -1){
      this.librosPorDefecto[index] = book;
      return true;
    }else{
      return false;
    }
  }

  deleteLocal(id_book: number): boolean {
    let index = this.librosPorDefecto.findIndex(libro => libro.id_book === id_book);
    if(index !== -1){
      this.librosPorDefecto.splice(index, 1);
      return true;
    }else{
      return false;
    }
  }

    // MÉTODOS LOCALES
  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.url}/books`);
  }

  getOne(id_book: number): Observable<Book>{
    return this.http.get<Book>(`${this.url}/books?id=${id_book}`);
  }

  add(book: Book): Observable<Book>{
    return this.http.post<Book>(`${this.url}/books`, book);
  }

  edit(book: Book): Observable<Book>{
    return this.http.put<Book>(`${this.url}/books`, book);
  }

  delete(id_book: number): Observable<Book>{
    return this.http.delete<Book>(`${this.url}/books?id=${id_book}`);
  }
}