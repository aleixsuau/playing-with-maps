import { Component, OnChanges, ViewChild, ElementRef, Input, SimpleChanges } from '@angular/core';
import MarkerClusterer from '@google/markerclustererplus';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {
  map: google.maps.Map; 
  markers: google.maps.Marker[];

  @Input()
  lat: number;
  @Input()
  lng: number;
  @Input()
  data: any;

  @ViewChild('mapContainer')
  gmap: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data.currentValue) {
      const days = this.data.days.map(day => day.experience_modules.filter(e => e.lat && e.lng)).filter(dayExp => dayExp.length);
      const coordinates = new google.maps.LatLng(this.lat, this.lng);
      const styledMapType = [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#cadaca"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#d2e6e8"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ] as google.maps.MapOptions['styles'];
      const mapOptions = {
        center: coordinates,
        zoom: 5,
        styles: styledMapType,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        }
      };
      this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);


      // Create markers
      const daysMarkers = days.map((experiences, i) => {
        return experiences.map(experience => {
          return new google.maps.Marker({
            position: new google.maps.LatLng(Number(experience.lat), Number(experience.lng)),
            label: experience.title,
          });          
        });
      });
      const allMarkers = daysMarkers.reduce((result, current) => [...result, ...current], []);
      // Group markers in clusters and place them into the map
      var markerCluster = new MarkerClusterer(this.map, allMarkers,
                                  {
                                    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
                                    title: 'hey map'
                                  });

      console.log('markerCluster', markerCluster)

    }
  }
}