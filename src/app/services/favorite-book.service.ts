import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
import { Book } from 'src/types/book.interface';
import { FavoriteBookList } from 'src/types/favorite-book.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoriteBookService {
  private id = 0;
  private favoriteLists: FavoriteBookList[] = [];
  private favoriteBookSubject = new BehaviorSubject<FavoriteBookList[]>([]);
  private favoriteBookObservable = this.favoriteBookSubject.asObservable();

  getAllLists() {
    return this.favoriteBookObservable;
  }

  getFavoriteBooks(id: number) {
    return this.favoriteBookObservable.pipe(
      map((list) => list.filter((l) => (l.id == id))[0]),
      filter((list) => !!list )
    );
  }

  addFavoriteList(name: string) {
    let newList: FavoriteBookList = { id: this.id++, name: name, books: [] };

    this.favoriteLists.push(newList);
    this.favoriteBookSubject.next([...this.favoriteLists]);
    return newList;
  }

  deleteFavoriteList(id: number) {
    let list = this.getFavoriteListById(id);
    if (list == undefined) return;
    this.favoriteLists.splice(this.favoriteLists.indexOf(list), 1);
    this.favoriteBookSubject.next([...this.favoriteLists]);
  }

  addBookToFavoriteList(id: number, book: Book) {
    let list = this.getFavoriteListById(id);
    if (list == undefined) return;
    let books = list.books.filter((b) => b.id == book.id);
    if (books.length !== 0) return;
    let index = this.favoriteLists.indexOf(list);
    list = { ...list, books: [...list.books, book] };
    this.favoriteLists[index] = list;
    this.favoriteBookSubject.next([...this.favoriteLists]);
  }

  private getFavoriteListById(id: number): FavoriteBookList | undefined {
    return this.favoriteLists.filter((l) => l.id === id)[0];
  }
}
