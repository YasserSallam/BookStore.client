import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SocialService } from '../../services/social.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserAuthenticated: boolean = false;

  constructor(private _authServ: AuthService, private _router: Router, private _socialSer: SocialService) { }

  ngOnInit(): void {
    this._authServ.isUserAuthenticated.subscribe(res => {
      this.isUserAuthenticated = res
    })
  }

  public logout = (event: any) => {
    event.preventDefault()
    localStorage.removeItem("token");
    this._authServ.AuthenticateUser(false);
    if (this._authServ.isExternalAuth) {
      this._socialSer.signOutExternal()
    }
    this._router.navigate([''])
  }

}
