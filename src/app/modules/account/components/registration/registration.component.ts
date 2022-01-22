import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
accountForm!:FormGroup
  constructor(private _fb:FormBuilder,private _accountServ:AuthService) { }

  ngOnInit(): void {
    this.accountForm=this._fb.group({
      firstName:[,[Validators.required]],
      lastName:[],
      email:[,[Validators.required]],
      password:[,[Validators.required]],
      confirmPassword:[,[Validators.required]]
    })
  }
  createAccount(){
    if(!this.accountForm.valid){
      return
    }
    this._accountServ.register(this.accountForm.value).subscribe(
      res=>{
        
      },
      err=>console.log(err)
    )
  }
}
