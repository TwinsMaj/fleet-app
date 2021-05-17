import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'datepicker',
	templateUrl: './datepicker.component.html',
	styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent implements OnInit {
	faCalendar = faCalendar;
	model: NgbDateStruct;

	constructor() {}

	ngOnInit(): void {}
}
