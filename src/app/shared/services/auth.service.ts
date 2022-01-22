import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDTO } from '../../modules/account/models/LoginDTO';
import { RegistrationDTO } from '../../modules/account/models/RegistrationDTO';
import { RegistrationResponse } from '../../modules/account/models/RegistrationResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
accountURL:string=environment.url+'account/'
private _authChangeSub = new Subject<boolean>()
public authChanged = this._authChangeSub.asObservable();

  constructor(private _http:HttpClient) { }
 
  public sendAuthStateChangeNotification  (isAuthenticated: boolean)  {
    this._authChangeSub.next(isAuthenticated);
  }

  public register(model:RegistrationDTO):Observable<RegistrationResponse>{
    return this._http.post(this.accountURL+'register',model) as Observable<RegistrationResponse>
  }

  public login(model:LoginDTO):Observable<RegistrationResponse>{
    return this._http.post(this.accountURL+'login',model) as Observable<RegistrationResponse>
  }
}
