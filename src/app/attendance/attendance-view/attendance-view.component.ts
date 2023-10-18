import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/shared-module/services/home-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attendance-view',
  templateUrl: './attendance-view.component.html',
  styleUrls: ['./attendance-view.component.css'],
})
export class AttendanceViewComponent implements OnInit {
  IncommingAttendanceDetails: any;
  constructor(private service: HomeServiceService) {}
  ngOnInit(): void {
    this.service.getAttendanceDate().subscribe((x: any) => {
      this.IncommingAttendanceDetails = x;
    });
  }
  sendmail(emp: any) {
    Swal.fire({
      title: 'Subject for Email',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Send mail',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('success!!', 'Message send Successfully', 'success');
        emp.message = result.value;
        this.service.sendMail(emp).subscribe((x: any) => {
          console.log(x);
        });
      }
    });
  }
}
