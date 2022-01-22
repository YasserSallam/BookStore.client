import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SocialService } from 'src/app/shared/services/social.service';
import { ExternalLoginDTO } from '../../models/ExternalLoginDTO';

@Component({
  selector: 'app-external-login',
  templateUrl: './external-login.component.html',
  styleUrls: ['./external-login.component.css']
})
export class ExternalLoginComponent implements OnInit {
  returnUrl!: string;

  constructor(private _socialSer: SocialService, private _authSer: AuthService,
    private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe(
      (res: Params) => {
        this.returnUrl = res.get('returnUrl')
      }
    )
  }
  externalLogin() {
    this._socialSer.signInWithGoogle()
      .then((res: SocialUser) => {
        let logintDTO = new ExternalLoginDTO();
        logintDTO.idToken = res.idToken
        logintDTO.provider = res.provider
        this._authSer.signInWithGoogle(logintDTO).subscribe(
          res => {
            localStorage.setItem("token", res.token);
            this._authSer.isExternalAuth = true;
            this._authSer.AuthenticateUser(res.success)
            if (this.returnUrl && this.returnUrl != '') {
              this._router.navigate([this.returnUrl]);
            }
            else
              this._router.navigate(['']);
          },
          err => console.log(err)
        )
      }, error => console.log(error))
  }
}
