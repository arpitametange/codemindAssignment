import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service2Service } from '../service2.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: Service2Service,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const user = this.loginForm.get('username')?.value;
    const pass = this.loginForm.get('password')?.value;

    // Instead of using local storage, you should store the user's login state in a more secure way, such as a token or session.
    // Here's how to set the token in local storage:
    // localStorage.setItem('token', 'your-auth-token-here');

    this.authService.get(user, pass).subscribe((res: any) => {
      console.log('response', res);
      const foundUser = res.find((userObj: any) => userObj.email === user && userObj.password === pass);
      if (foundUser) {
        // Store the user's authentication token or information in a secure way (e.g., using an authentication service).
        // authService.setAuthenticatedUser(foundUser);

        this.router.navigate(['/imagePostPage']);
        this.snackbar.open('🤩🤩🤩 Password is correct 🤩🤩🤩', '', { duration: 1000, verticalPosition: 'bottom' });
      } else {
        this.snackbar.open(' 🙃 Incorrect password or email', '', { duration: 1000 });
      }
    });
  }
}
