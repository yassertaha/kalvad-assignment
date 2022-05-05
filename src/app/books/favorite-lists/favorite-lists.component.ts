import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteBookService } from 'src/app/services/favorite-book.service';
import { FavoriteBookList } from 'src/types/favorite-book.interface';

@Component({
  selector: 'app-favorite-lists',
  templateUrl: './favorite-lists.component.html',
  styleUrls: ['./favorite-lists.component.scss']
})
export class FavoriteListsComponent implements OnInit {

  public favoriteBookList$!: Observable<FavoriteBookList[]>;

  constructor(private favoriteBookService: FavoriteBookService) { }

  ngOnInit(): void {
    this.favoriteBookList$ = this.favoriteBookService.getAllLists();
  }

  deleteList(id: number) {
    this.favoriteBookService.deleteFavoriteList(id);
  }

}
