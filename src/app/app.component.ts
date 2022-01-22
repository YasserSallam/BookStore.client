import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUserAuthenticated:boolean=false;
  title = 'BookStore';

constructor(private _authServ:AuthService ,private _router:Router) {
  
}
  ngOnInit(){
    this._authServ.authChanged.subscribe(res=>
      {
        this.isUserAuthenticated=res})
  }
  public logout = (event:any) => {
    event.preventDefault()
    localStorage.removeItem("token");
    this._authServ.sendAuthStateChangeNotification(false);
    this._router.navigate([''])
  }
}
