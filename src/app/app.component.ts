import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	authStatus: boolean;

	constructor(private authService: AuthService) { }

	ngOnInit() {
		let user = localStorage.getItem("user");
		this.authStatus = (user != "");
	}
}
