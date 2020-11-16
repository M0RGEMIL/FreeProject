import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

	@Input() appareilName: string;
	@Input() appareilStatus: string;
	@Input() index: number;

  constructor(private appareilService: TodoService) { }

  ngOnInit(): void {
  }

	getStatus () {
		return this.appareilStatus;
	}

	getColor () {
		if (this.appareilStatus == "éteint")
			return ("red");
		else
			return ("green");
	}

	onSwitch() {
	    if(this.appareilStatus === 'allumé') {
	      this.appareilService.switchOffOne(this.index);
	    } else if(this.appareilStatus === 'éteint') {
	      this.appareilService.switchOnOne(this.index);
	    }
	}

}
