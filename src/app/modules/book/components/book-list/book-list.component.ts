import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../../models/Book';
import { BookListingDTO } from '../../models/BookListingDTO';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private _bookSer:BookService) { }
books:BookListingDTO[]=[]
  ngOnInit(): void {
    this._bookSer.getBooks().subscribe(
      res=>this.books=res,
      err=>console.log(err)
    )
  }

  getImageSrc(imageName:string):string{
let imgSrc= environment.imagesURL+imageName
return imgSrc;  
}

}
