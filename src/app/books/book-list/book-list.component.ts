import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/types/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books$!: Observable<Book[]>;

  constructor(private bookService: BookService) { }
  ngOnInit(): void {
    this.books$ = this.bookService.getBooks()
  }

}
