import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
 const router = inject(Router)
 const authService = inject(AuthService);


 const isLoggedin = authService.isAuthentication();
 if(isLoggedin){
  return true;
 }else{ 
 router.navigateByUrl('/login');
  return false;

 }
  
};
