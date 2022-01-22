import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './modules/account/account.module';
import { BookModule } from './modules/book/book.module';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
{path:"",component:WelcomeComponent},
  {path:"book",loadChildren:()=>BookModule ,canActivate:[AuthGuardService]},
  { path:"account",loadChildren:()=>AccountModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
