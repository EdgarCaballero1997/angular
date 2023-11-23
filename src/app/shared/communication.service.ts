import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private filtroIdSubject = new BehaviorSubject<string>('');
  filtroId$ = this.filtroIdSubject.asObservable();

  constructor(){
  }

  setFiltroId(filtroId: string) {
    this.filtroIdSubject.next(filtroId);
  }
}