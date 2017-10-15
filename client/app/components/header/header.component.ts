import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent {
  public title: string;
  public shouldShowActions: boolean;

  constructor() { }
}
