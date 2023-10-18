import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService],
})
export class RegisterComponent {
  Error: any;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private message: MessageService
  ) {}
  formgroup = this.fb.group({
    username: ['', Validators.required],
    Email: ['', Validators.required],
    password: ['', Validators.required],
  });

  navigate() {
    this.router.navigate(['login/log']);
  }
  submit() {
    if (this.formgroup.valid) {
      this.http
        .post('http://localhost:8000/postUser', this.formgroup.value)
        .subscribe((x: any) => {
          this.Error = x;
          console.log(x.err);
        });
      setTimeout(() => {
        if (this.Error?.err == 'error') {
          this.message.add({
            severity: 'error',
            summary: 'Failure',
            detail: 'Already Signed',
          });
        } else {
          this.message.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Successfully Registerd',
          });
          setTimeout(() => {
            this.router.navigate(['login/log']);
          }, 1000);
        }
      }, 1000);

      this.formgroup.reset();
    }
  }
}
