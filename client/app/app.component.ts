import { HeaderService } from './services/header/header.service';
import { ProjectService } from './services/projects/project.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public shouldShowHeader: boolean;

  constructor(private headerService: HeaderService) {
    this.headerService.showHeader.subscribe( (state) => {
      this.shouldShowHeader = state;
    });
  }
}
