import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;
  book!: Book
  formData!: FormData;
  selectedImage: any
  selectedImageUrl: string = ''
  imageUploaded = false
  bookId: number = 0;
  updatdeMode: boolean = false
  constructor(private fb: FormBuilder, private _bookServ: BookService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(param => {
      this.bookId = Number(param.get('id'))
      if (this.bookId > 0) {
        this.GetBook(this.bookId);
        this.updatdeMode = true;
      }
    })

    this.bookForm = this.fb.group({
      title: [, [Validators.required]],
      authorName: [, [Validators.required]],
      publishedDate: [, [Validators.required]],
      numberOfPages: []

    })

  }

  uploadImage(event: any) {
    this.selectedImage = event.target.files[0];
    //display
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedImage)
    reader.onload = (f) => {
      this.selectedImageUrl = <string>f.target?.result;
      this.imageUploaded = true;
    }

  }

  create() {
    if (!this.bookForm.valid) {
      return
    }
    this.formData = new FormData();
    this.formData.append("title", this.bookForm.controls.title.value)
    this.formData.append("authorName", this.bookForm.controls.authorName.value)
    this.formData.append("publishedDate", this.bookForm.controls.publishedDate.value)
    this.formData.append("numberOfPages", this.bookForm.controls.numberOfPages.value)
    this.formData.append("Image", this.selectedImage)
    if (this.updatdeMode) {
    this.formData.append("id", this.bookId.toString())
      this._bookServ.updateBook(this.formData).subscribe(
        res => {
          this.bookForm.reset();
          this._router.navigate(['/book'])
        },
        err => console.log(err));
    }
    else {
      this._bookServ.createBook(this.formData).subscribe(
        res => {
          this.bookForm.reset();
          this._router.navigate(['/book'])
        },
        err => console.log(err));
    }
  }
  GetBook(bookId: number) {
    this._bookServ.getBookById(bookId).subscribe(
      res => {
        this.book = res;
        this.bookForm.patchValue(res)
        this.bookForm.get('publishedDate')?.setValue(new Date(this.book.publishedDate).toISOString().split('T')[0]);
        this.handleImage();
      },
      err => console.log(err)

    )
  }

  handleImage() {
    if (this.book.coverImageName != null && this.book.coverImageName != '') {
      this.selectedImageUrl = environment.imagesURL + this.book.coverImageName
      this.imageUploaded = true
    }
  }
}
