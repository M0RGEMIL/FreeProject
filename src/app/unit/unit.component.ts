import { Component, OnInit } from '@angular/core';
import { UnitService } from '../services/unit.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

	name: string = '1ère Digoin';
	pageContent: string = "Page de la troupe";

  constructor(private unitService: UnitService, private route: ActivatedRoute) {}

	ngOnInit() {
	    const id = this.route.snapshot.params['id'];
			this.name = this.unitService.getUnitById(+id).name;
	}

}
