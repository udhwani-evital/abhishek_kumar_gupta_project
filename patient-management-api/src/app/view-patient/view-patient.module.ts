import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { ViewPatientComponent } from './view-patient.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import the spinner module
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ViewPatientComponent, AlertComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',

        component: ViewPatientComponent,
      },
    ]),
    MatCardModule,
    MatProgressSpinnerModule,
    CommonModule,
  ],
  exports: [ViewPatientComponent],
})
export class ViewPatientModule {}
