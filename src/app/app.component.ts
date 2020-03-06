import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  itinerary$: Observable<any>;

  constructor(
    private httpClient: HttpClient,
  ) {}

  ngOnInit() {
    this.itinerary$ = this.httpClient
                              .get(`https://backofficedev.essentialist.com/api/booking/70df7b9c211b78462e1aa0430f5605d6/`)
  }
}
