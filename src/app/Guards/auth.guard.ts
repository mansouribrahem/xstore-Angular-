import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let token;
  if (typeof window !== 'undefined' && localStorage.getItem('userToken')) {
    token = localStorage.getItem('userToken');
  }
  if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
