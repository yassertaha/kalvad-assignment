import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from 'src/types/book.interface';
import { books } from '../data/books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books = books;
  private booksSubject = new BehaviorSubject<Book[]>(this.books);
  private booksObservable = this.booksSubject.asObservable();
  getBooks() {
    return this.booksObservable;
  }
}
