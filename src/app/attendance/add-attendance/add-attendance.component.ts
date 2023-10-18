import { Component, OnInit } from '@angular/core';
import {
  Department,
  employeeDate,
} from 'src/app/shared-module/models/interface';
import { HomeServiceService } from 'src/app/shared-module/services/home-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css'],
})
export class AddAttendanceComponent implements OnInit {
  EmployeeDetails: any;
  newEmployeeDetails: any;
  department: Department[] = [];
  TableHead: any;
  visible: boolean = false;
  selectedCity: any;
  status: any = [{ state: 'present' }, { state: 'absent' }];
  permission: any = [{ state: 'with' }, { state: 'without' }];
  selectedCategory: any;
  dayInMilliseconds = 1000 * 60 * 60 * 24;
  constructor(private service: HomeServiceService) {}
  ngOnInit(): void {
    this.service.getEmployeeDetails().subscribe((res: any) => {
      res.map((x: any) => {
        x.disabled = true;
        x.permissionDisabled = true;
        x.Date = new Date();
        console.log(res);
      });
      this.EmployeeDetails = res;
      this.newEmployeeDetails = res;
    });
    this.service.department().subscribe((x: any) => {
      this.department = x;
      this.department.unshift({ id: 7, department: 'All' });
    });
    this.TableHead = this.service.attendenceTable();
  }
  showWithorWithout(e: any) {
    if (e.present.state === 'present') {
      e.disabled = true;
      e.permissionState = '';
    } else {
      e.disabled = false;
    }
  }
  showPermission(e: any) {
    if (e.permissionState.state === 'with') {
      e.permissionDisabled = false;
    } else {
      e.permissionDisabled = true;
      e.permission = '';
    }
    console.log(e);
  }
  submit() {
    let x = 0;
    this.EmployeeDetails.map((res: any) => {
      if (!res.present) {
        x = 1;
      }
    });
    if (x == 1) {
      Swal.fire('Warning!!!', 'Mark Each and Every Employee', 'warning');
    } else {
      let date = localStorage.getItem('date');
      if (date !== new Date().toLocaleDateString()) {
        Swal.fire('success!!!', 'Submitted successfully ', 'success');
        this.service
          .postAttendance(this.EmployeeDetails)
          .subscribe((x: any) => {
            console.log(x);
          });

        localStorage.setItem('date', new Date().toLocaleDateString());
      } else {
        Swal.fire(
          'Warning!!!',
          'You have Already submitted the attendance',
          'warning'
        );
        this.EmployeeDetails.map((x: any) => {
          x.present = '';
          x.permissionState = '';
          x.permission = '';
        });
      }
    }
  }
  changeDepartment() {
    if (this.selectedCity.department === 'All') {
      this.EmployeeDetails = this.newEmployeeDetails;
    } else {
      this.EmployeeDetails = this.newEmployeeDetails.filter(
        (res: employeeDate) => res.department === this.selectedCity.department
      );
    }
  }
}
