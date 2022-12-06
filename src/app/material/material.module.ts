import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule
  ],
  exports:  [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule
  ]
})
export class MaterialModule { }
