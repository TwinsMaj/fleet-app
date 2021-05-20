import { EVENT_DISPLAY_TRIP } from './../common/constants';
import { EventService } from './../services/event.service';
import { RealTimePayload, EventInfo } from './../types/index';
import { RealTimeGpsService } from './../services/real-time-gps.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
	selector: 'datepicker',
	templateUrl: './datepicker.component.html',
	styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent implements OnInit {
	realVehicleData: RealTimePayload;
	filterForm = new FormGroup({
		period: new FormControl('', Validators.required),
	});

	@Input('objectID') vehicleID: number;
	@Input('key') token: string;

	constructor(private realTimeService: RealTimeGpsService, private eventService: EventService) {}

	ngOnInit(): void {}

	getRealtimeDataBy(date: HTMLInputElement) {
		const { startDate, endDate } = this.getRangeFrom(date.value);

		const param = `objectId=${this.vehicleID}&begTimestamp=${startDate}
		&endTimestamp=${endDate}&key=${this.token}&json`;

		this.realTimeService.getAll(param).subscribe((data) => {
			this.realVehicleData = this.filterRealTimeData(data as RealTimePayload);

			this.eventService.emit<EventInfo>({
				type: EVENT_DISPLAY_TRIP,
				payload: this.realVehicleData,
			});
		});
	}

	getRangeFrom(date: string) {
		const startDate = date;
		const nextDay = this.getNextDateFrom(new Date(startDate), 1);
		const endDate = formatDate(nextDay, 'yyyy-MM-d', 'en-US');

		return { startDate, endDate };
	}

	getNextDateFrom(date: Date, step: number) {
		return new Date(date.getTime() + step * 24 * 60 * 60 * 1000);
	}

	filterRealTimeData(payload: RealTimePayload) {
		let { response } = payload;

		response = response.filter((snapshot) => snapshot.EngineStatus === null);
		payload.response = response;

		return payload;
	}

	get filterCtrl() {
		return this.filterForm.controls;
	}
}
