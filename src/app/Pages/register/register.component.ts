import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerFrom: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.maxLength(20),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });
  isLoading: boolean = false;
  errMessage: string = '';
  constructor(private _authService: AuthService, private _router: Router) {}

  signUp(form: FormGroup) {
    this.errMessage = '';
    if (form.valid && !this.isLoading) {
      this.isLoading = true;
      //call api
      this._authService.register(form.value).subscribe({
        next: (data) => {
          this.isLoading = false;
          this._router.navigate(['/login']);
          console.log(data, 'Success');
        },
        error: (err) => {
          this.isLoading = false;
          this.errMessage = err.error.message;
        },
      });
    }
  }
}
