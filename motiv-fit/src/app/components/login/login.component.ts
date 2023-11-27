// login.component.ts

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  submitForm(loginForm: NgForm): void {
    if (loginForm.valid) {
      const credentials = {
        username: loginForm.value.username,
        password: loginForm.value.password
      };

      this.authService.login(credentials).subscribe(
        response => {
          console.log(response);
          if (response.includes('Login bem-sucedido')) {
            // Navegar para outra página após o login bem-sucedido
            this.router.navigate(['/22113uyguyvdxu727717e7hhflsddsdvv-w212e2r2-fdfrere']);
          } else {
            // Tratar outras respostas, se necessário
          }
        },
        error => {
          console.error(error);
        }
      );
    }
  }
}
