import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MapComponent } from './map.component';
import { MapsService } from '../../services/maps/maps.service';

xdescribe('MapComponent', () => {
  /* let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let mapsServiceSpy;

  beforeEach(async(() => {
    mapsServiceSpy = jasmine
                      .createSpyObj(
                        'MapsService',
                        ['getGoogleMaps'],
                      );
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      providers: [
        {
          provide: MapsService,
          useValue: mapsServiceSpy,
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a the #map HTML element', () => {
    const mapElement = fixture.debugElement.query(By.css('#map'));

    expect(mapElement).toBeTruthy();
  });

  it('should create the map with latLng and Marker', fakeAsync(() => {
    const mapsObject = {
      maps: jasmine.createSpyObj('maps', ['Map', 'LatLng', 'Marker', 'MapTypeControlStyle']),
    };
    mapsServiceSpy.getGoogleMaps.and.returnValue(Promise.resolve(mapsObject));
    mapsObject.maps.MapTypeControlStyle.and.returnValue({DROPDOWN_MENU: null});

    const changes = {
      lat: {
        currentValue: 213,
        previousValue: null,
        firstChange: true,
        isFirstChange: () => true,
      },
      lng: {
        currentValue: 123,
        previousValue: null,
        firstChange: true,
        isFirstChange: () => true,
      }
    };

    component.ngOnChanges(changes);
    fixture.detectChanges();

    expect(mapsServiceSpy.getGoogleMaps).toHaveBeenCalled();

    tick();
    expect(mapsObject.maps.Map).toHaveBeenCalled();
    expect(mapsObject.maps.LatLng).toHaveBeenCalled();
    expect(mapsObject.maps.Marker).toHaveBeenCalled();
  })); */
});
