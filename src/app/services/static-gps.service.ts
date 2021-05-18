import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class StaticGpsService extends DataService {
	constructor(http: HttpClient) {
		super('https://app.ecofleet.com/seeme/Api/Vehicles/getLastData', http);
	}
}
