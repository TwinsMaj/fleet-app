import { EVENT_DISPLAY_MARKERS, EVENT_DISPLAY_TRIP } from './../common/constants';
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
	map: google.maps.Map;
	source: google.maps.LatLngLiteral;
	destination: google.maps.LatLngLiteral;
	center: google.maps.LatLngLiteral;

	options: google.maps.MapOptions = {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 6,
	};

	directionService: google.maps.DirectionsService;
	directionRenderer: google.maps.DirectionsRenderer;

	@Input() vehicleMarkers: StaticPayload;

	constructor(private eventService: EventService) {}

	ngOnInit(): void {
		navigator.geolocation.getCurrentPosition((position) => {
			this.center = {
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			};

			this.map = new google.maps.Map(document.querySelector('.map-canvas')!, {
				...this.options,
				center: this.center,
			});

			this.directionService = new google.maps.DirectionsService();
			this.directionRenderer = new google.maps.DirectionsRenderer({
				map: this.map,
				suppressMarkers: true,
			});
		});

		this.renderVehicleMarkers();
		this.displayTrip();
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

	displayTrip() {
		this.eventService.on<EventInfo>().subscribe((data) => {
			const { type, payload } = data;

			if (type === EVENT_DISPLAY_TRIP && payload.response) {
				const trips: Array<LastVehicleData | RealVehicleData> = payload.response;
				console.log(trips);
				///this.setRoutPolyline(trips as Array<RealVehicleData>);
			}
		});
	}

	setRoutPolyline(trips: RealVehicleData[]) {
		const start = trips[0];
		const end = trips[1];
		this.source = { lat: start.Latitude, lng: start.Longitude };
		this.destination = { lat: end.Latitude, lng: end.Longitude };

		let request = {
			origin: this.source,
			destination: this.destination,
			travelMode: google.maps.TravelMode.DRIVING,
		};

		this.directionService.route(request, (response, status) => {
			this.directionRenderer.setOptions({
				suppressPolylines: false,
				map: this.map,
			});

			if (status == google.maps.DirectionsStatus.OK) {
				this.directionRenderer.setDirections(response);
			}
		});
	}
}
