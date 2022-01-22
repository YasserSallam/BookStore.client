import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { SocialService } from 'src/app/shared/services/social.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { ExternalLoginDTO } from '../../models/ExternalLoginDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  returnUrl!: string;
  
  constructor(private _authSer: AuthService,
    private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute) { }


    ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe(
      (res: Params) => {
        this.returnUrl = res.get('returnUrl')
      }
    )
    this.loginForm = this._fb.group({
      email: [],
      password: []
    })
  }
  login() {
    this._authSer.login(this.loginForm.value).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this._authSer.AuthenticateUser(res)
        if(this.returnUrl != null && this.returnUrl !=''){
          debugger;
        this._router.navigate([this.returnUrl]);
        }
        else{
        this._router.navigate(['']);
        }
      },
      err => console.log(err)
    )
  }


}
