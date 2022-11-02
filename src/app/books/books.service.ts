import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}
  getBooks() {
    return [
      {
        name: 'clean code',
        author: 'robert c martin',
        image:
          'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 700,
      },
      {
        name: 'Pragmatic Programmer',
        author: 'David Thomas',
        image: 'https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg',
        amount: 800,
      },
      {
        name: 'Atatürk: The Biography of the Founder of Modern Turkey',
        author: 'Andrew Mango',
        image: 'https://m.media-amazon.com/images/I/714BPBNCo-L._AC_UY218_.jpg',
        amount: 1000,
      },
      {
        name: 'Madam Atatürk: The First Lady of Modern Turkey',
        author: 'Ipek Calislar',
        image: 'https://m.media-amazon.com/images/I/81xLY7YVPtL._AC_UY218_.jpg',
        amount: 600,
      },
    ];
  }
}
