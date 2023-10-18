import { Component } from '@angular/core';
import { employeeDate } from 'src/app/shared-module/models/interface';
import { HomeServiceService } from 'src/app/shared-module/services/home-service.service';

@Component({
  selector: 'app-inactive-page',
  templateUrl: './inactive-page.component.html',
  styleUrls: ['./inactive-page.component.css'],
})
export class InactivePageComponent {
  employees: any;
  department: any;
  selectedCity: any;
  newEmployees: any;
  selectedCities: any;
  TableHead: any;
  newTableHead: any;
  constructor(private service: HomeServiceService) {}
  ngOnInit(): void {
    this.service.getInactive().subscribe((res: any) => {
      this.employees = res;
      this.newEmployees = res;
      console.log(res);
    });
    this.service.department().subscribe((res: any) => {
      this.department = res;
    });
    this.TableHead = this.service.table();
    this.newTableHead = this.service.table();
  }
  edit(data: any) {
    this.employees.splice(data, 1);
    data.active = 'Active';
    this.service.getUpdate(data).subscribe((x: any) => {
      console.log(x);
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
