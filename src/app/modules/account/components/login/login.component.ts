import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private _authSer: AuthService,
     private _fb: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: [],
      password: []
    })
  }
  login() {
    this._authSer.login(this.loginForm.value).subscribe(
      res => {
        console.log(res)
        localStorage.setItem("token", res.token);
        this._authSer.AuthenticateUser(res.success)
        this._router.navigate(['']);
      },
      err => console.log(err)
    )
  }

  
}
