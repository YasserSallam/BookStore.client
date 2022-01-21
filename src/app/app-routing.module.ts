import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BookModule } from './modules/book/book.module';

const routes: Routes = [
{path:"",component:WelcomeComponent},
  {
    path:"book",loadChildren:()=>BookModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
