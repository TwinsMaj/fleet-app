import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class RealTimeGpsService extends DataService {
	constructor(http: HttpClient) {
		super('https://app.ecofleet.com/seeme/Api/Vehicles/getRawData', http);
	}
}
