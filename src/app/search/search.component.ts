import { EVENT_DISPLAY_MARKERS } from './../common/constants';
import { EventService } from './../services/event.service';
import { errorHandler } from './../common/error-handler';
import { StaticPayload, EventInfo, SearchData } from './../types/index';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenValidator } from '../common/validators/token.validator';
import { StaticGpsService } from '../services/static-gps.service';
@Component({
	selector: 'search-form',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
	@Output() change = new EventEmitter<SearchData>();

	lastGPSData: StaticPayload;
	form = new FormGroup({
		token: new FormControl('', [Validators.required, TokenValidator.noWhiteSpace]),
	});

	constructor(private service: StaticGpsService, private eventService: EventService) {}

	ngOnInit(): void {}

	getAllVehicleDataFor(apiToken: HTMLInputElement) {
		const key = apiToken.value;
		const param = `key=${key}&json`;

		this.service.getAll(param).subscribe((data) => {
			this.lastGPSData = data as StaticPayload;

			this.change.emit({
				key,
				payload: this.lastGPSData,
			} as SearchData);

			this.eventService.emit<EventInfo>({
				type: EVENT_DISPLAY_MARKERS,
				payload: this.lastGPSData,
			});
		}, errorHandler);

		apiToken.value = '';
	}

	get ctrl() {
		return this.form.controls;
	}
}
