import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [MessageService],
})
export class LoginPageComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private message: MessageService,
    private router: Router
  ) {}
  formgroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  submit() {
    console.log(this.formgroup.value);

    if (this.formgroup.valid) {
      this.http
        .post('http://localhost:8000/login', this.formgroup.value)
        .subscribe((x: any) => {
          sessionStorage.setItem('token', x.token);
        });

      setTimeout(() => {
        let token = sessionStorage.getItem('token');
        if (token) {
          this.message.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Logging in....',
          });
          setTimeout(() => {
            this.router.navigate(['home']);
          }, 1000);
        } else {
          this.message.add({
            severity: 'error',
            summary: 'Invalid',
            detail: 'You have entered Invalid Data',
          });
        }
      }, 1000);
    } else {
      this.message.add({
        severity: 'warn',
        summary: 'Warning!!',
        detail: 'It seems you did not completed the form fully',
      });
    }
  }
  navigate() {
    this.router.navigate(['login/register']);
  }
}
