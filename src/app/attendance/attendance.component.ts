import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent {
  Attendance: any = [
    { name: 'Add Attendance', link: 'addAttendance' },
    { name: 'View Table', link: 'attendanceView' },
  ];
  Title: string = 'AttendanceDetails';
}
