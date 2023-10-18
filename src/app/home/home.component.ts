import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../shared-module/services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  value: any;
  links: any;
  constructor(private router: Router, private service: HomeServiceService) {}
  ngOnInit(): void {
    this.service.links().subscribe((response: any) => {
      console.log(response);
      this.links = response;
    });
  }
  navigate(module: any) {
    this.router.navigate([module.replace(' ', '')]);
  }
}
