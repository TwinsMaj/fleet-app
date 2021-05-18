import { StaticPayload } from './../types/index';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'search-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
	@Input('vehiclesList') vehiclesData: StaticPayload;
	constructor() {}

	ngOnInit(): void {}
}
