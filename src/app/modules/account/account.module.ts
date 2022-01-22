import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExternalLoginComponent } from './components/external-login/external-login.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ExternalLoginComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
