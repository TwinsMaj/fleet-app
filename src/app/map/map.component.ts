import { EVENT_DISPLAY_MARKERS } from './../common/constants';
import { EventService } from './../services/event.service';
import { StaticPayload, EventInfo, LastVehicleData, RealVehicleData } from './../types/index';
import { Component, Input, OnInit } from '@angular/core';
import {} from 'googlemaps';

@Component({
	selector: 'map-view',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
	@Input() vehicleMarkers: StaticPayload;
	map: google.maps.Map;
	center: google.maps.LatLngLiteral;
	options: google.maps.MapOptions = {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 6,
	};

	constructor(private eventService: EventService) {}

	ngOnInit(): void {
		navigator.geolocation.getCurrentPosition((position) => {
			this.center = {
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			};

			// initialize the map container
			this.map = new google.maps.Map(document.querySelector('.map-canvas')!, {
				...this.options,
				center: this.center,
			});

			// const markerStart = new google.maps.Marker({
			// 	position: this.center,
			// 	map: this.map,
			// });
		});

		this.renderVehicleMarkers();
	}

	renderVehicleMarkers() {
		this.eventService.on<EventInfo>().subscribe((data) => {
			const { type, payload } = data;

			if (type === EVENT_DISPLAY_MARKERS && payload.response) {
				const vehicles: Array<LastVehicleData | RealVehicleData> = payload.response;

				(vehicles as Array<LastVehicleData>).map((vehicle) => {
					const { longitude: lng, latitude: lat, plate: label } = vehicle;
					new google.maps.Marker({
						position: { lat, lng },
						label,
						map: this.map,
					});
				});
			}
		});
	}
}
