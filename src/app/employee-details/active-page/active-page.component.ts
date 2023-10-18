import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Department,
  employeeDate,
} from 'src/app/shared-module/models/interface';
import { HomeServiceService } from 'src/app/shared-module/services/home-service.service';

@Component({
  selector: 'app-active-page',
  templateUrl: './active-page.component.html',
  styleUrls: ['./active-page.component.css'],
})
export class ActivePageComponent implements OnInit {
  employees: employeeDate[] = [];
  newEmployees: employeeDate[] = [];
  TableHead: any;
  newTableHead: any;
  department: Department[] = [];
  selectedCity: any;
  selectedCities: any;
  constructor(private service: HomeServiceService, private router: Router) {}
  ngOnInit(): void {
    this.TableHead = this.service.table();
    this.newTableHead = this.service.table();
    this.service.getEmployee().subscribe((res: any) => {
      this.employees = res;
      this.newEmployees = res;
    });
    this.service.department().subscribe((res: any) => {
      this.department = res;
      this.department.unshift({ id: 7, department: 'All' });
    });
  }
  edit(data: employeeDate) {
    this.router.navigate(['EmployeeDetails/addemployee'], {
      state: { data: data },
    });
  }
  changeDepartment() {
    if (this.selectedCity.department === 'All') {
      this.employees = this.newEmployees;
    } else {
      this.employees = this.newEmployees.filter(
        (res: employeeDate) => res.department === this.selectedCity.department
      );
    }
  }
  changeHead() {
    if (!this.selectedCities.length) {
      this.TableHead = this.service.table();
    } else {
      this.TableHead = this.selectedCities;
    }
  }
}
