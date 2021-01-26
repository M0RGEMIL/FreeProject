import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

	isAuth = false;
	date = new Date();
	currentMessage: string;
	user : string;

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

  constructor(private authService: AuthService) {
	user = JSON.parse(localStorage.getItem("user"));
}

	ngOnInit() {
		this.user = this.authService.user;
	}

	addMessage(message) {
		let msg = new MessageComponent();
		msg.author = this.user;
		msg.content = this.currentMessage;
		this.currentMessage = "";
		msg.reaction = 0;
		msg.created_at = new Date();
		msg.origin = "test";
		this.messages.push(msg);
	}

}
