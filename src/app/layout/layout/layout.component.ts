import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { FavoriteBookService } from 'src/app/services/favorite-book.service';
import { FavoriteBookList } from 'src/types/favorite-book.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  favoriteLists$!: Observable<FavoriteBookList[]>;

  constructor(private breakpointObserver: BreakpointObserver, private favoriteBookService: FavoriteBookService) {}

  ngOnInit(): void {
    this.favoriteLists$ = this.favoriteBookService.getAllLists();
  }
}
