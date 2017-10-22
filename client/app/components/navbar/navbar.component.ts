import { INavigation } from './../../interfaces/INavigation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  public title: string;
  public shouldShowActions: boolean;
  public navItems: Array<INavigation>;

  public ngOnInit() {
    this.navItems = [
      {
        state: '',
        name: 'Portfolio'
      }
    ];
  }
}
