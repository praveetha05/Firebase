import { inject } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';


export const gateGuard: CanActivateFn = (_route, _state) => {
  const auth=inject(Auth);
  const router=inject(Router)

  return authState(auth).pipe(
    take(1),
    map(k => {
      if (k) {
        return true;
      }
      else {
        return router.createUrlTree((['/login']));
      }
    })

  )};
