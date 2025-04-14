import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if(auth.checkAuthentication()){
    return true;
  }else{
    router.navigate(['login']);
    alert('Please log in first');
    return false;
  }
};
