import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private _http:HttpClient,private _externalAuthService: SocialAuthService) { }

  public signInWithGoogle = ()=> {
    return this._externalAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  public signOutExternal = () => {
    this._externalAuthService.signOut();
  }
}
