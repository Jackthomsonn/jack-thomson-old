import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeaderService {
  public showHeader: Subject<boolean> = new Subject();

  constructor() {
  }
}
