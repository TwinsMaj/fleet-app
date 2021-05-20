import { StaticPayload } from './../types/index';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
@Component({
	selector: 'search-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
	vehicleID: number;
	@Input('vehiclesList') vehiclesData: StaticPayload;
	@Output() change = new EventEmitter<number>();

	constructor() {}

	ngOnInit(): void {}

	selectVehicle(id: number) {
		console.log(id);
		this.vehicleID = id;
		this.change.emit(this.vehicleID);
	}
}
