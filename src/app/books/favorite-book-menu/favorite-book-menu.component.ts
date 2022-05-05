import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FavoriteBookService } from 'src/app/services/favorite-book.service';
import { Book } from 'src/types/book.interface';
import { FavoriteBookList } from 'src/types/favorite-book.interface';

@Component({
  selector: 'app-favorite-book-menu',
  templateUrl: './favorite-book-menu.component.html',
  styleUrls: ['./favorite-book-menu.component.scss'],
})
export class FavoriteBookMenuComponent implements OnInit {
  @Input() book!: Book;
  public favoriteBookLists$!: Observable<FavoriteBookList[]>;
  constructor(private favoriteBooksService: FavoriteBookService) {}

  ngOnInit(): void {
    this.favoriteBookLists$ = this.favoriteBooksService.getAllLists();
  }

  addList(name: NgModel) {
    this.favoriteBooksService.addFavoriteList(name.value);
    name.control.setValue(undefined);
  }
  addBookToList(id: number) {
    this.favoriteBooksService.addBookToFavoriteList(id, this.book);
  }

  bookAlreadyAdded(list: FavoriteBookList) {
    return list.books.filter((book) => book.id == this.book.id).length !== 0
  }
}
