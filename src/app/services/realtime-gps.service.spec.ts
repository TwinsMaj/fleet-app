import { TestBed } from '@angular/core/testing';

import { RealtimeGpsService } from './realtime-gps.service';

describe('RealtimeGpsService', () => {
	let service: RealtimeGpsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(RealtimeGpsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
