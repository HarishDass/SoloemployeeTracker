import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  EmployeeBar: any = [
    { name: 'Add Employee', link: 'addEmployee' },
    { name: 'Inactive', link: 'inactive' },
    { name: 'Active', link: 'active' },
    { name: 'BarChart', link: 'barchart' },
  ];
  Title: string = 'EmployeeDetails';
}
