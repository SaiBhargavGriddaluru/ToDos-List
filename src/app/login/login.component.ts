import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = 'Bhargav';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false

  constructor(private router: Router){

  }

  handleLogin(){
    // console.log(this.username);
    if (this.username === "Bhargav" && this.password === "Rishik@123"){
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }
  }
}
