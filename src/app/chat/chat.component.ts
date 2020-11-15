import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

	isAuth = false;
	date = new Date();
	currentMessage: string;
	user: any;

	messages = [
	    {
	      author: 'Augustin',
	      content: 'premier test',
				reaction: '1',
				created_at: this.date,
				origin: 'test'
	    },
			{
	      author: 'Augustin',
	      content: 'deuxieme test',
				reaction: '1',
				created_at: this.date,
				origin: 'test'
	    }
	  ];

  constructor(private authService: AuthService) { }

	ngOnInit() {
		this.user = this.authService.user;
	}

}
