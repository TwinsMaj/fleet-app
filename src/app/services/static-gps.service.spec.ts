import { TestBed } from '@angular/core/testing';

import { StaticGpsService } from './static-gps.service';

describe('StaticGpsService', () => {
	let service: StaticGpsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(StaticGpsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
