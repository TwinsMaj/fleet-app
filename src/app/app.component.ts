import { StaticPayload } from './types/index';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'fleet-app';
	lastGPSData: StaticPayload;

	onLastVehiclesDataChange(eventArgs: any) {
		this.lastGPSData = eventArgs;
		console.log(eventArgs);
	}
}
