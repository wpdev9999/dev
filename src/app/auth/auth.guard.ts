import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router){

  }

  canActivate() {
    // let role= localStorage.getItem('userType');
    // if(role == "admin"){
    //   return true;
    // }

     if(this.auth.IsLoggedIn()){
      return true;
     } 
     alert("You must login first!!");
    this.router.navigate(['']);
    return false;

  }
  
}
