import { Book } from "./book.interface";

export interface FavoriteBookList {
    id: number;
    name: string;
    books: Book[];
}