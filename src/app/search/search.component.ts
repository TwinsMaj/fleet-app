import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenValidator } from '../common/validators/token.validator';

@Component({
	selector: 'search-form',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
	form = new FormGroup({
		token: new FormControl('', [Validators.required, TokenValidator.noWhiteSpace]),
	});

	constructor() {
		console.log(this.form);
	}

	ngOnInit(): void {}

	get ctrl() {
		return this.form.controls;
	}
}
