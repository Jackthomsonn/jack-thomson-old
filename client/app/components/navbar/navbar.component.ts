import { INavigation } from './../../interfaces/INavigation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})

export class NavbarComponent {
  public title: string;
  public shouldShowActions: boolean;
  public navItems: Array<INavigation>;

  constructor() {
    this.navItems = [
      {
        state: '',
        name: 'Portfolio'
      }
    ];
  }
}
