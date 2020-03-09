import { Component, OnChanges, ViewChild, ElementRef, Input, SimpleChanges } from '@angular/core';
import MarkerClusterer from '@google/markerclustererplus';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {
  map: google.maps.Map; 
  mapOptions: google.maps.MapOptions;
  markers: google.maps.Marker[];

  @Input()
  lat: number;
  @Input()
  lng: number;
  @Input()
  data: any;

  @ViewChild('mapContainer', {static: false})
  gmap: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data.currentValue) {
      const days = this.data.days.map(day => day.experience_modules.filter(e => e.lat && e.lng)).filter(dayExp => dayExp.length);
      const coordinates = new google.maps.LatLng(this.lat, this.lng);
      const mapOptions = {
        center: coordinates,
        zoom: 5,
      };
      this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);

      // Create markers
      const daysMarkers = days.map((experiences, i) => {
        return experiences.map(experience => {
          return new google.maps.Marker({
            position: new google.maps.LatLng(Number(experience.lat), Number(experience.lng)),
            label: experience.title,
            // map: this.map,
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