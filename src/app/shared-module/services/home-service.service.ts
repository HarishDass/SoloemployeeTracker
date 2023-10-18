import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/interface';
import {
  links,
  department,
  addEmployee,
  getEmployee,
  Inactive,
  update,
  getEmployeeDetails,
  addAttendance,
  getAttendanceDetails,
  sendMail,
  updateList,
} from '../environment/environment';
@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  constructor(private http: HttpClient) {}
  table() {
    return [
      { name: 'EmployeeID' },
      { name: 'Name' },
      { name: 'Photo' },
      { name: 'DateofBirth' },
      { name: 'Department' },
      { name: 'Gender' },
      { name: 'PhoneNumber' },
      { name: 'Email' },
      { name: 'Nationality' },
      { name: 'State' },
      { name: 'Edit' },
    ];
  }
  attendenceTable() {
    return [
      { name: 'EmployeeID' },
      { name: 'Name' },
      { name: 'Photo' },
      { name: 'DateofBirth' },
      { name: 'Department' },
      { name: 'Gender' },
      { name: 'PhoneNumber' },
      { name: 'Email' },
      { name: 'Present_OR_Absent' },
      { name: 'With_OR_Without' },
      { name: 'PermissionLetter' },
    ];
  }
  links() {
    return this.http.get(links);
  }
  department(): Observable<Department[]> {
    return this.http.get<Department[]>(department);
  }
  addEmployee(data: any) {
    return this.http.post(addEmployee, data);
  }
  getEmployee() {
    return this.http.get(getEmployee);
  }
  getInactive() {
    return this.http.get(Inactive);
  }
  getUpdate(data: any) {
    return this.http.put(update, data);
  }
  getEmployeeDetails() {
    return this.http.get(getEmployeeDetails);
  }
  postAttendance(data: any) {
    return this.http.post(addAttendance, data);
  }
  getAttendanceDate() {
    return this.http.get(getAttendanceDetails);
  }
  sendMail(data: any) {
    return this.http.post(sendMail, data);
  }
  updateList(data: any) {
    return this.http.put(updateList, data);
  }
}
