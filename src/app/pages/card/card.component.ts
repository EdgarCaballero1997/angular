import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Book } from 'src/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { CommunicationService } from 'src/app/shared/communication.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {  // Implementa OnInit

  @Input() librosPorDefecto: Book[] = [];
  @Output() libroEliminado = new EventEmitter<number>();

  id_book: string = "";
  // librosPorDefecto: Book[] = [];
  filtroId: string = ""; //AQUÍ

  constructor(private booksService: BooksService, private communicationService: CommunicationService) {
    this.librosPorDefecto = [];
  }

  ngOnInit() {
    this.loadBooks();
    this.booksService.getAll().subscribe((books: Book[]) => {
      this.librosPorDefecto = books;
    });
  }

  private loadBooks() {
    let storedBooks = localStorage.getItem('librosPorDefecto');
    this.librosPorDefecto = storedBooks ? JSON.parse(storedBooks) : [];
  }

  eliminarLibro(index: number): void {
    this.booksService.delete(this.librosPorDefecto[index].id_book);
  }

  buscarLibro() {
    console.log('Buscar libro:', this.filtroId);
    this.communicationService.setFiltroId(this.filtroId);
  }
}