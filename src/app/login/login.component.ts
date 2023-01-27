import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('edwar', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('qwerasdf', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  onSubmit() {
    const { username, password } = this.loginForm.value;
    if (username && password) {
      this.loginService.login({ username, password }).subscribe({
        next: () => {
          this.router.navigateByUrl('/starship');
        },
        error: (err) => {
          console.log(err);
          this.snackBar.open(err.error.error, 'ok', { duration: 2000 });
        },
      });
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
