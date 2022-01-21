import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './components/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookFormComponent } from './components/book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailsComponent } from './components/book-details/book-details.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookFormComponent,
    BookDetailsComponent,

  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BookModule { }
