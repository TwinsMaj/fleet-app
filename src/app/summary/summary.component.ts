import { Component, Input, OnInit } from '@angular/core';
@Component({
	selector: 'trip-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
	@Input('itemID') vehicleID: number;
	@Input('apiToken') apiKey: string;
	constructor() {}

	ngOnInit(): void {}
}
