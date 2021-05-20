import { TestBed } from '@angular/core/testing';

import { RealTimeGpsService } from './real-time-gps.service';

describe('RealTimeGpsService', () => {
	let service: RealTimeGpsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(RealTimeGpsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
