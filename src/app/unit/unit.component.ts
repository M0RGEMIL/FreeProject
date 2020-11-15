import { Component, OnInit } from '@angular/core';
import { UnitService } from '../services/unit.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

	name: string = 'Appareil';
	status: string = 'Statut';

  constructor(private unitService: UnitService, private route: ActivatedRoute) {}

	ngOnInit() {
	    const id = this.route.snapshot.params['id'];
			this.name = this.unitService.getUnitById(+id).name;
	 		this.status = this.unitService.getUnitById(+id).status;
	}

}
