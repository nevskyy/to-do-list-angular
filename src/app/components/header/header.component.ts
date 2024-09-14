import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  addTaskMode: boolean = false;

  constructor(private uiService: UiService, private router: Router) {
  }

  toggleAddTask() {
    this.addTaskMode = !this.addTaskMode;
    this.uiService.setData(this.addTaskMode);
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
