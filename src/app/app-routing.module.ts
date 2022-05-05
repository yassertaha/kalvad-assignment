import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { FavoriteBookListComponent } from './books/favorite-book-list/favorite-book-list.component';
import { FavoriteListsComponent } from './books/favorite-lists/favorite-lists.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'allBooks', component: BookListComponent },
      { path: 'allFavoriteList', component: FavoriteListsComponent },
      { path: 'favoriteList/:id', component: FavoriteBookListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
