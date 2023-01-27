import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login({ username, password }: { username: string; password: string }) {
    return this.httpClient
      .post<{ token: string }>(`http://localhost:3000/login`, {
        username,
        password,
      })
      .pipe(
        tap((res) => {
          this._saveToken(res.token);
        })
      );
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  private _saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
