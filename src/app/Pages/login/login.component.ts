import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  isLoading: boolean = false;
  errMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(loginForm: FormGroup) {
    if (loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.authService.Login(loginForm.value).subscribe({
        next: (data) => {
          console.log('login data', data);
          this.isLoading = false;
          localStorage.setItem('userToken', data.token);
          this.authService.setUserToken();
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.isLoading = false;
          this.errMessage = err.error.message;
        },
      });

      //call api
    } else {
      // not valid
    }
  }
}
