import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { BookListComponent } from './book-list/book-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FavoriteBookListComponent } from './favorite-book-list/favorite-book-list.component';
import { FavoriteBookMenuComponent } from './favorite-book-menu/favorite-book-menu.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BookListComponent, FavoriteBookListComponent, FavoriteBookMenuComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatListModule,
    FormsModule
  ]
})
export class BooksModule { }
