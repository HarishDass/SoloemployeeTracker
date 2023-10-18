import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details.component';
import { ActivePageComponent } from './active-page/active-page.component';
import { InactivePageComponent } from './inactive-page/inactive-page.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDetailsComponent,
    children: [
      { path: 'active', component: ActivePageComponent },
      { path: 'inactive', component: InactivePageComponent },
      { path: 'barchart', component: BarChartComponent },
      { path: '**', component: AddEmployeeComponent },
      { path: 'addEmployee', component: AddEmployeeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeDetailsRoutingModule {}
