import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  @Input() sideBar: any;
  @Input() title: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateTO() {
    this.router.navigate(['home']);
  }
}
