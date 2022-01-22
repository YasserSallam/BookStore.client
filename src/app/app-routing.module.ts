import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './modules/account/account.module';
import { BookModule } from './modules/book/book.module';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';

const routes: Routes = [
{path:"",component:WelcomeComponent},
  {
    path:"book",loadChildren:()=>BookModule
  },
  {
    path:"account",loadChildren:()=>AccountModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
