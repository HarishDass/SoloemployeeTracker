import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { AttendanceViewComponent } from './attendance-view/attendance-view.component';

const routes: Routes = [
  {
    path: '',
    component: AttendanceComponent,
    children: [
      {
        path: 'addAttendance',
        component: AddAttendanceComponent,
      },
      {
        path: 'attendanceView',
        component: AttendanceViewComponent,
      },
      {
        path: '**',
        component: AddAttendanceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutingModule {}
