import { Injectable } from '@angular/core';
import { CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){

  }

  
  
  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url = state.url;
    return this.checkLogin(url)
  }

  checkLogin(url: string): boolean {
    console.log(url)
    if(url==="/addclassroom") return localStorage.getItem('role')==="teacher";
    if(this.authService.checkAuth()) return true;
    this.router.navigate(['/'])
    return false;
  }
  
}
