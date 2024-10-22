import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';

import { ViewPatientComponent } from './view-patient/view-patient.component';
import { CanDeactivateGuard } from './add-patient/can-deactivate-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'view-patient', pathMatch: 'full' },
  {
    path: 'add-patient',
    component: AddPatientComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  { path: 'view-patient', component: ViewPatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
