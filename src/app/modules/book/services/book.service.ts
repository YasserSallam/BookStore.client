import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/Book';
import { BookListingDTO } from '../models/BookListingDTO';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  private bookUrl: string = environment.url + 'book'
 
 
  public getBooks(): Observable<BookListingDTO[]> {
    return this.http.get(this.bookUrl+'/GetList') as Observable<BookListingDTO[]>
  }

  
  public createBook(book:any): Observable<number> {
    return this.http.post(this.bookUrl+'/createBook',book) as Observable<number>
  }
  public updateBook(book:any): Observable<number> {
    debugger
    return this.http.post(this.bookUrl+'/UpdateBook',book) as Observable<number>
  }

  public getBookById(bookId:number): Observable<Book> {
    return this.http.get(this.bookUrl+'/GetById/'+bookId) as Observable<Book>
  }

  public deleteBook(bookId:number)  {
    return this.http.get(this.bookUrl+'/DeleteBook/'+bookId) 
  }
}
