import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const AuthGuard = () => {
  const isLoggedIn = inject(LoginService).isLoggedIn();
  const router = inject(Router);
  return isLoggedIn ? true : router.navigateByUrl('/login');
};
