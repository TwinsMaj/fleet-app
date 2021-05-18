import { Component, OnInit } from '@angular/core';
import {} from 'googlemaps';

@Component({
	selector: 'map-view',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
	map: google.maps.Map;
	center: google.maps.LatLngLiteral;
	options: google.maps.MapOptions = {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		disableDefaultUI: true,
		disableDoubleClickZoom: true,
		zoom: 16,
	};

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
	}
}
