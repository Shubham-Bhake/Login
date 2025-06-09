import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.login.isLoggedIn() && this.login.getUserRole() == 'Competency Member') {
        return true;
      }
  
      this.router.navigate(['Onboard']);
      return false;
      

  }
  
}
