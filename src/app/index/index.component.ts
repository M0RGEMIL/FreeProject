import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	columnDefs = [
	        { field: 'Nom', sortable: true, filter: true ,suppressSizeToFit: false},
	        { field: 'Prénom', sortable: true, filter: true,suppressSizeToFit: false },
	        { field: 'Patrouille', sortable: true, filter: true ,suppressSizeToFit: false}
	    ];

	    rowData = [
	        { Nom: 'Perot', Prénom: 'Lilian', Patrouille: "Bison" },
	        { Nom: 'Aufrère', Prénom: 'Victor', Patrouille: "Aigle-Pecheur" },
	        { Nom: 'Maillon', Prénom: 'Ludovic', Patrouille: "Cerf" }
	    ];

  constructor() { }

  ngOnInit(): void {
  }

}
