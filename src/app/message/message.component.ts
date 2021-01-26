import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

	user : any;
	@Input() author: any;
	@Input() content: string;
	@Input() reaction: number;
	@Input() created_at: string;
	@Input() origin: string;

	constructor(private authService: AuthService) {}

	ngOnInit() {
		console.log(this.authService.getUser());
		this.user = this.authService.user;
	}
}
