import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

	isAuth = true;
	date = new Date();
	currentMessage: string;
	user : any;

	messages = [
	    {
	      author: { name: 'Augustin'},
	      content: 'premier test',
				reaction: 1,
				created_at: this.date,
				origin: 'test'
	    },
			{
	      author: { name: 'Augustin'},
	      content: 'deuxieme test',
				reaction: 1,
				created_at: this.date,
				origin: 'test'
	    }
	  ];

  constructor(private authService: AuthService) {}

	ngOnInit() {
		console.log(this.authService.getUser());
		this.user = this.authService.user;
	}

	addMessage() {
		let msg = {
			author : this.user,
			content : this.currentMessage,
			reaction : 0,
			created_at : new Date(),
			origin : "test"
		}
		if (this.currentMessage != "") {
			this.messages.push(msg);
			this.currentMessage = "";
		}
	}

}
