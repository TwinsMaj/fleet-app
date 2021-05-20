import { StaticPayload, SearchData } from './types/index';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'fleet-app';
	apiKey: string;
	lastGPSData: StaticPayload;
	vehicleID: number;

	onLastVehiclesDataChange(eventArgs: SearchData) {
		const { key, payload } = eventArgs;
		this.apiKey = key;
		this.lastGPSData = payload;
	}

	onSelectResultItem(eventArgs: any) {
		this.vehicleID = eventArgs;
	}
}
