import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HomeServiceService } from 'src/app/shared-module/services/home-service.service';
import { Department } from 'src/app/shared-module/models/interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  department: Department[] | undefined;
  gender = [{ name: 'Male' }, { name: 'Female' }, { name: 'Others' }];
  PhotoBase64: string =
    'https://www.freeiconspng.com/uploads/upload-icon-3.png';
  historyData: any;
  active = [{ name: 'Active' }, { name: 'Inactive' }];
  constructor(
    private fb: FormBuilder,
    private service: HomeServiceService,
    private router: Router
  ) {
    this.service.department().subscribe((x: Department[]) => {
      this.department = x;
    });
  }
  ngOnInit(): void {
    if (history.state.data) {
      this.setValueforFormgroup(history.state.data);
      this.historyData = history.state.data;
    }
  }
  formgroup = this.fb.group({
    name: ['', Validators.required],
    DOB: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    nationality: ['', Validators.required],
    department: ['', Validators.required],
    gender: ['', Validators.required],
    active: ['', Validators.required],
    addressLine1: ['', Validators.required],
    addressLine2: [''],
    city: ['', Validators.required],
    state: ['', Validators.required],
    pincode: ['', Validators.required],
    fatherName: ['', Validators.required],
    Photo: [''],
    Qualification: ['', Validators.required],
    CTC: [0, Validators.required],
    email: ['', Validators.required],
    emergencyNumber: ['', Validators.required],
    AadharNumber: ['', Validators.required],
    PanNumber: ['', Validators.required],
  });

  upload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.PhotoBase64 = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  setValueforFormgroup(data: any) {
    this.formgroup.setValue({
      name: data.name,
      DOB: data.DOB,
      phoneNumber: data.phoneNumber,
      nationality: data.nationality,
      department: data.department,
      gender: data.gender,
      active: data.active,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      city: data.city,
      state: data.state,
      pincode: data.pincode,
      fatherName: data.fatherName,
      Photo: '',
      Qualification: data.Qualification,
      CTC: data.CTC,
      email: data.email,
      emergencyNumber: data.emergencyNumber,
      AadharNumber: data.AadharNumber,
      PanNumber: data.PanNumber,
    });
    this.PhotoBase64 = data.photo;
  }
  submit() {
    this.formgroup.value.Photo = this.PhotoBase64;

    if (this.formgroup.valid) {
      Swal.fire('Success!!!', 'Submitted Successfully ', 'success');

      this.service.addEmployee(this.formgroup.value).subscribe((x: any) => {
        console.log(x);
      });
      this.PhotoBase64 =
        'https://www.freeiconspng.com/uploads/upload-icon-3.png';
      this.formgroup.reset();
    } else {
      Swal.fire('Warning!!!', 'Fill all the mandatory fields ', 'warning');
    }
  }
  update() {
    this.formgroup.value.Photo = this.PhotoBase64;

    if (this.formgroup.valid) {
      Swal.fire('Success!!!', 'Submitted Successfully ', 'success');

      this.service.updateList(this.formgroup.value).subscribe((x: any) => {
        console.log(x);
      });
      this.PhotoBase64 =
        'https://www.freeiconspng.com/uploads/upload-icon-3.png';
      this.formgroup.reset();
      this.router.navigate(['EmployeeDetails/active']);
    } else {
      Swal.fire('Warning!!!', 'Fill all the mandatory fields ', 'warning');
    }
  }
  Reset() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reset it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.formgroup.reset();
        this.PhotoBase64 =
          'https://www.freeiconspng.com/uploads/upload-icon-3.png';

        Swal.fire('Deleted!', 'Your form is reseted successfully.', 'success');
      }
    });
  }
}
