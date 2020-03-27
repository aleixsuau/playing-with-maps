import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [
    MapComponent,
  ]
})
export class MapModule { }
