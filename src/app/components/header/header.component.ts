import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'To Do';
  btnOnOff: boolean;
  subsciption: Subscription;
  constructor(private uiService: UiService, private router: Router) {
    this.subsciption = this.uiService.onToggle().subscribe((val) => {
      this.btnOnOff = val;
    });
  }

  ngOnInit(): void {
    this.uiService.initAddTask();
  }
  toggleBtn() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
