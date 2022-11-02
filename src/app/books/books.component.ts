import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  card: Book[] = [];

  isShowing: boolean = true;

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  myName: string = '';
  // toggleBooks() {
  //   //if isShowing is true ,then make it false
  //   //or isShowing is false ,then make it true
  //   this.isShowing = !this.isShowing;
  // }
}
