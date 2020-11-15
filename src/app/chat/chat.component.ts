import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
	date = new Date();

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

  constructor() { }

  ngOnInit(): void {
  }

}
