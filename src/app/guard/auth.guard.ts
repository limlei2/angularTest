import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const loggedData = localStorage.getItem("angular19User");
  if(loggedData !== null){
    return true;
  } else {
    router.navigateByUrl("login");
    return false;
  }
};
