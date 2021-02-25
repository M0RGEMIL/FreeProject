import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trad-page',
  templateUrl: './trad-page.component.html',
  styleUrls: ['./trad-page.component.css']
})
export class TradPageComponent implements OnInit {

	toTranslate: string;
	translated: string;

  constructor() { }

  ngOnInit(): void {
  }

	translate()
	{
		this.translated = "Traduit";
	}

}
