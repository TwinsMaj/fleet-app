import { errorHandler } from './../common/error-handler';
import { StaticPayload } from './../types/index';
import { Component, OnInit, ErrorHandler } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenValidator } from '../common/validators/token.validator';
import { StaticGpsService } from '../services/static-gps.service';
import { AppError } from '../common/app-error';

@Component({
	selector: 'search-form',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
	lastGPSData: StaticPayload[];
	form = new FormGroup({
		token: new FormControl('', [Validators.required, TokenValidator.noWhiteSpace]),
	});

	constructor(private service: StaticGpsService) {}

	ngOnInit(): void {}

	getAllVehicleDataFor(apiToken: HTMLInputElement) {
		console.log(apiToken);
		const param = `key=${apiToken.value}&json`;

		this.service.getAll(param).subscribe((data) => (this.lastGPSData = data), errorHandler);

		apiToken.value = '';
	}

	get ctrl() {
		return this.form.controls;
	}
}
