import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

	@Input() author: string;
	@Input() content: string;
	@Input() reaction: number;
	@Input() created_at: string;
	@Input() origin: string;

  constructor() { }

  ngOnInit(): void {
  }

}
