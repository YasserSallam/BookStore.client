import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
book!:Book
bookId:number=0
baseImagesURL= environment.imagesURL
  constructor(private _activatedRoute:ActivatedRoute,private _bookServ:BookService, private _router:Router) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(param => {
      this.bookId = Number(param.get('id'))
      if (this.bookId > 0) {
        this.GetBook(this.bookId);
      }
    })
  }

  GetBook(bookId: number) {
    this._bookServ.getBookById(bookId).subscribe(
      res => {
        this.book = res;
      },
      err => console.log(err)

    )
  }



deleteBook(){
  this._bookServ.deleteBook(this.bookId).subscribe(
    res=> this._router.navigate(['book']),
    err=>console.log(err)
  )
}

}
