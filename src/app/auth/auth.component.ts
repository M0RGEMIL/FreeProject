import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	name: string;
	authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
		let user = localStorage.getItem("user");
    this.authStatus = (user != "");
  }

  onSignIn() {
    	this.authService.signIn(this.name);
      this.authStatus = this.authService.isAuth;
			this.router.navigate(['']);
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
		localStorage.setItem('user', "");
  }
}
