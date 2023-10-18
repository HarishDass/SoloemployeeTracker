import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsComponent } from './employee-details.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ActivePageComponent } from './active-page/active-page.component';
import { InactivePageComponent } from './inactive-page/inactive-page.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [EmployeeDetailsComponent, AddEmployeeComponent, ActivePageComponent, InactivePageComponent, BarChartComponent],
  imports: [CommonModule, EmployeeDetailsRoutingModule, SharedModuleModule],
})
export class EmployeeDetailsModule {}
