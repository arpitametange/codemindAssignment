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


    this.authService.get(user, pass).subscribe((res: any) => {
      console.log('response', res);
      const foundUser = res.find((userObj: any) => userObj.email === user && userObj.password === pass);
      if (foundUser) {
   

        this.router.navigate(['/imagePostPage']);
        this.snackbar.open('🤩🤩🤩 Password is correct 🤩🤩🤩', '', { duration: 1000, verticalPosition: 'bottom' });
      } else {
        this.snackbar.open(' 🙃 Incorrect password or email', '', { duration: 1000 });
      }
    });
  }
}
