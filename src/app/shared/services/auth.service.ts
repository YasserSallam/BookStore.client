import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ExternalLoginDTO } from 'src/app/modules/account/models/ExternalLoginDTO';
import { environment } from 'src/environments/environment';
import { LoginDTO } from '../../modules/account/models/LoginDTO';
import { RegistrationDTO } from '../../modules/account/models/RegistrationDTO';
import { RegistrationResponse } from '../../modules/account/models/RegistrationResponse';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
accountURL:string=environment.url+'account/';
isExternalAuth: boolean=false;
isUserAuthenticated:EventEmitter<boolean>=new EventEmitter<boolean>()
  constructor(private _http:HttpClient,  ) { }
 public AuthenticateUser(authenticate:boolean){
   this.isUserAuthenticated.emit(authenticate)
 }


  public register(model:RegistrationDTO):Observable<RegistrationResponse>{
    return this._http.post(this.accountURL+'register',model) as Observable<RegistrationResponse>
  }

  public login(model:LoginDTO):Observable<RegistrationResponse>{
    return this._http.post(this.accountURL+'login',model) as Observable<RegistrationResponse>
  }

  signInWithGoogle(extrnalLoginDTO:ExternalLoginDTO): Observable<RegistrationResponse>{
return this._http.post(this.accountURL+'externalLogIn',extrnalLoginDTO)as Observable<RegistrationResponse>
  }
}
