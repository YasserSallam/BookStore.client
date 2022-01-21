import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  {path:"",component:BookListComponent},
  {path:"create",component:BookFormComponent},
  {path:"update/:id",component:BookFormComponent},
  {path:"details/:id",component:BookDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
