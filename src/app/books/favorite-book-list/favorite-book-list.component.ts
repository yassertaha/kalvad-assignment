import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FavoriteBookService } from 'src/app/services/favorite-book.service';
import { FavoriteBookList } from 'src/types/favorite-book.interface';

@Component({
  selector: 'app-favorite-book-list',
  templateUrl: './favorite-book-list.component.html',
  styleUrls: ['./favorite-book-list.component.scss']
})
export class FavoriteBookListComponent implements OnInit, OnDestroy {

  public favoriteBookList$!: Observable<FavoriteBookList>;
  private destroyed: Subject<void> = new Subject();
  constructor(private route: ActivatedRoute, private favoriteBookService: FavoriteBookService) { }
  

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroyed))
    .subscribe(params => {
      this.favoriteBookList$ = this.favoriteBookService.getFavoriteBooks(params["id"])
    })
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
