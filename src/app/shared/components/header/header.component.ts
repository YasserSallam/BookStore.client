import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationResponse } from 'src/app/modules/account/models/RegistrationResponse';
import { AuthService } from '../../services/auth.service';
import { SocialService } from '../../services/social.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserAuthenticated: RegistrationResponse =new  RegistrationResponse() ;

  constructor(private _authServ: AuthService, private _router: Router, private _socialSer: SocialService) { }

  ngOnInit(): void {
    this._authServ.isUserAuthenticated.subscribe(res => {
      this.isUserAuthenticated = res
    })
    if(localStorage.getItem('token'))
      this.isUserAuthenticated.success=true
  }

  public logout = (event: any) => {
    event.preventDefault()
    localStorage.removeItem("token");
    const res=new RegistrationResponse();
    res.success=false
    this._authServ.AuthenticateUser(res);
    if (this._authServ.isExternalAuth) {
      this._socialSer.signOutExternal()
    }
    this._router.navigate([''])
  }

}
