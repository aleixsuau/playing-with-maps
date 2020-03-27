import { ImagesService } from './../../../core/services/images.service';
import { MapsService } from './../../services/maps/maps.service';
import { Component, Input, OnChanges, ViewChild, ElementRef, SimpleChanges } from '@angular/core';


@Component({
  selector: 'ess-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
  google;
  map: google.maps.Map;
  relatedMap: {[key: string]: any};
  typesMap = {};
  typesList: IType[] = [];
  typesSelectOptions: IType[] = [];
  markerActive: number;
  markers: google.maps.Marker[] = [];
  infoWindows: google.maps.InfoWindow[] = [];

  @Input()
  lat: string;
  @Input()
  lng: string;
  @Input()
  height = 500;
  @Input()
  title: string;
  @Input()
  related: IRelated[];

  @ViewChild('mapContainer', {static: false})
  gmap: ElementRef;

  constructor(
    private _mapsService: MapsService,
    private _imagesService: ImagesService,
    private _element: ElementRef,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (!(changes.lat && changes.lat.currentValue && changes.lng && changes.lng.currentValue) &&
        !(changes.related && changes.related.currentValue)) {
      return;
    }

    this.setupMap().then(() => {
      if (changes.lat && changes.lat.currentValue &&
          changes.lng && changes.lng.currentValue &&
          changes.title && changes.title.currentValue &&
          (!this.related || !this.related.length)) {
        const selfExploreMarker = {lat: this.lat, lng: this.lng, title: this.title};

        this.setupMarker(selfExploreMarker);
      }

      if (changes.related && changes.related.currentValue) {
        this.relatedMap = changes.related.currentValue.reduce((relatedMap, related) => {
          relatedMap = {
            ...relatedMap,
            [related.name]: {
              locations: related.related_objects,
              markers: [],
              infoWindows: [],
            }
          };

          return relatedMap;
        }, {});

        this.setUpLocations();
      }
    });
  }

  async setupMap() {
    this.relatedMap = {};
    this.typesMap = {};
    this.typesList = [];
    this.typesSelectOptions = [];
    this.markers = [];
    this.markerActive = null;
    this.infoWindows = [];
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

    this.google = await this._mapsService.getGoogleMaps();

    const lat = this.lat || this.related && this.related[0] && this.related[0].related_objects && this.related[0].related_objects[0] && this.related[0].related_objects[0].lat;
    const lng = this.lng || this.related && this.related[0] && this.related[0].related_objects && this.related[0].related_objects[0] && this.related[0].related_objects[0].lng;

    this.map = new this.google.maps.Map(this.gmap.nativeElement, {
        center: new this.google.maps.LatLng(lat, lng),
        zoom: 14,
        styles: styledMapType,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: this.google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        }
    });
  }

  setupMarker(location: ILocation) {
    const svgIcon = {
      path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
      fillColor: '#4a4a4a',
      fillOpacity: 0.9,
      scale: 0.8,
      strokeWeight: 0,
    };

    const mrkr = new this.google.maps.Marker({
      position: new this.google.maps.LatLng(Number(location.lat), Number(location.lng)),
      label: {
        text: location.title,
        fontSize: '1.6rem',
        fontWeight: '400',
        fontFamily: "'PlantinMTPro', 'Times New Roman', 'Times', 'Baskerville', 'Georgia', serif",
      },
      map: this.map,
      icon: svgIcon,
    });

    this.markers = [...this.markers, mrkr];

    return mrkr;
  }

  setUpInfoWindow(location: ILocation, marker: google.maps.Marker) {
    const infowindow = new google.maps.InfoWindow({
      content: `
        <div class="info_window_container">
          <h4>${location.title}</h4>

          ${location.description}

          <h5>ADDRESS:</h5>

          <p>${location.address}, ${location.zipcode}</p>
        </div>
      `,
    });

    this.infoWindows = [...this.infoWindows, infowindow];

    marker.addListener('click', () => {
      this.infoWindows.forEach(infoWindow => infoWindow.close());
      infowindow.open(this.map, marker);
      this.markerActive = location.id;
      const element = this._element.nativeElement.getElementsByClassName(String(location.id))[0];

      if (element) {
        element.scrollIntoView({block: 'start', behavior: 'smooth'});
      }
    });

    return infowindow;
  }

  setUpLocations() {
    Object
      .keys(this.relatedMap)
      .forEach(key => {
        const locations = this.relatedMap[key].locations;

        locations.forEach(location => {
          const marker = this.setupMarker(location);
          let infoWindow;
          this.relatedMap[key].markers = [...this.relatedMap[key].markers, marker];

          if (location.description) {
            infoWindow = this.setUpInfoWindow(location, marker);

            this.relatedMap[key].infoWindows = [...this.relatedMap[key].infoWindows, infoWindow];
          }

          if (this.typesMap[location.type_slug]) {
            this.typesMap[location.type_slug].markers = [...this.typesMap[location.type_slug].markers, marker];
            this.typesMap[location.type_slug].locations = [...this.typesMap[location.type_slug].locations, location];
            if (infoWindow) {
              this.typesMap[location.type_slug].infoWindows = [...this.typesMap[location.type_slug].infoWindows, infoWindow];
            }
          } else {
            this.typesMap[location.type_slug] = {
              title: location.type,
              key: location.type_slug,
              markers: [marker],
              locations: [location],
              infoWindows: infoWindow ? [infoWindow] : [],
            };
          }
        });
      });

    this.typesList = Object.keys(this.typesMap).map(key => this.typesMap[key]);
    this.typesSelectOptions = [...this.typesList];
  }

  focusMarker(type, index) {
    const marker = type.markers[index];
    marker.setAnimation(google.maps.Animation.BOUNCE);
    marker.map.setZoom(17);
    marker.map.panTo(marker.position);
    setTimeout(() => {
      marker.setAnimation(null);
    }, 2000);
  }

  filterTypesAndMarkers(filter: string) {
    this.typesList = Object
                      .keys(this.typesMap)
                      .map(key => {
                        // Remove all markers from the map
                        this.typesMap[key].markers.forEach(marker => marker.setMap(null));
                        return key;
                      })
                      .filter(key => !filter || filter === key)
                      .map(key => {
                        // Set filtered markers on the map
                        this.typesMap[key].markers.forEach((marker, index) => {
                          marker.setMap(this.map);

                          // Center the map on the last marker
                          if (index === this.typesMap[key].markers.length - 1) {
                            marker.map.panTo(marker.position);
                          }
                        });

                        return this.typesMap[key];
                      });
  }

  getImageUrl$(url: string, height: number, width: number, sizes?: IImageSizes) {
    return this._imagesService.getImageUrl$(url, height, width, sizes);
  }
}
